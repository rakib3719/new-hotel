'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Messagepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['message', currentPage],
    queryFn: async () => {
      const response = await axios.get(`/api/contact?page=${currentPage}`);
      return response.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div className="py-28 text-center text-black">
        <h1 className="text-2xl animate-pulse">Loading messages...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-xl text-red-500">
        Error loading messages. Please try again later.
      </p>
    );
  }

  const { data: messages, totalPages } = data;

  // Modal close handler
  const closeModal = () => setSelectedMessage(null);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 text-[#f9a825]"
        >
          User Messages
        </motion.h1>

        {/* Message Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {messages.map((message) => (
            <motion.div
              key={message._id}
              className="bg-[#1f1f1f] rounded-lg shadow-md p-6 space-y-4 border border-[#333333]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#f9a825]">
                {message.name}
              </h2>
              <div>
                <p className="text-sm text-gray-400">
                  <strong>Phone: </strong>{message.number}
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Email: </strong>{message.email}
                </p>
              </div>
              <div className="bg-[#292929] p-4 rounded-md">
                <p className="text-md text-white">
                  <strong>Message:</strong>
                </p>
                <p className="text-gray-300">
                  {message.message.length > 20
                    ? `${message.message.slice(0, 20)}...`
                    : message.message}
                </p>
                {message.message.length > 20 && (
                  <button
                    onClick={() => setSelectedMessage(message)}
                    className="mt-2 text-[#f9a825] underline text-sm hover:text-[#c2851e] transition"
                  >
                    See More
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center items-center mt-10 space-x-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-[#f9a825] text-black font-medium rounded-lg hover:bg-[#c2851e] disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-[#f9a825] text-black font-medium rounded-lg hover:bg-[#c2851e] disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1f1f1f] rounded-lg shadow-lg p-8 w-full max-w-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#f9a825] mb-4">
                {selectedMessage.name}
              </h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  <strong>Phone: </strong>{selectedMessage.number}
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Email: </strong>{selectedMessage.email}
                </p>
                <div className="bg-[#292929] p-4 rounded-md">
                  <p className="text-md text-white">
                    <strong>Full Message:</strong>
                  </p>
                  <p className="text-gray-300">{selectedMessage.message}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-2 bg-[#f9a825] text-black font-medium rounded-lg hover:bg-[#c2851e] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Messagepage;
