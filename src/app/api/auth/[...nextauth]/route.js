
import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const db = await connectDB();
        const users = db.collection("users");

        // Find user in database
        const user = await users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }

        // Check if the password matches
        if (user.password !== credentials.password) {
          throw new Error("Invalid credentials");
        }

        // Return user object
        return {
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
