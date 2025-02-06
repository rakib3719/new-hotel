'use client';

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="text-center">
                <h1>Loading...</h1>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false, // Set to false for handling redirection explicitly
            });

            if (result.error) {
                setError(result.error); // Display the error
            } else {
                // Redirect manually after successful login
                window.location.href = "/mydashboard";
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
            console.error("Login error:", err);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setLoader(true);

        const oldPassword = e.target.old.value;
        const newPassword = e.target.new.value;
        const email = e.target.email.value;

        const data = { oldPassword, newPassword, email };
console.log(data);
        try {
            const resp = await axios.put("/api/passUpdate", data);
            if (resp.status === 200) {
                toast.success("Password updated successfully");
                setLoader(false);
                setIsPasswordModalOpen(false);
            }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(errorMessage);
            setLoader(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
<ToastContainer/>
                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsPasswordModalOpen(true)}
                        className="text-blue-600 hover:underline"
                    >
                        Change Password
                    </button>
                </div>
            </div>

            {/* Change Password Modal */}
            <AnimatePresence>
                {isPasswordModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                Change Password
                            </h2>
                            <form onSubmit={handlePasswordChange} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Old Password
                                    </label>
                                    <input
                                        type="password"
                                        name="old"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Enter your old password"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="new"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Enter your new password"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordModalOpen(false)}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
                                        disabled={loader}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:opacity-50"
                                        disabled={loader}
                                    >
                                        {loader ? "Updating..." : "Update"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Login;
