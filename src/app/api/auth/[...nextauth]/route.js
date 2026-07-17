// auth/[...nextauth]/route.js
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
   session: { 
    strategy: "jwt",
    maxAge: 24 * 60 * 60 
  },
  jwt: {
    maxAge: 24 * 60 * 60 
  },
  providers: [
    CredentialsProvider({
      async authorize(credential) {
        const { email, password } = credential;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("There is a problem connecting to the server");
        }

        if (!email || !password) throw new Error("Please enter valid data");

        const user = await User.findOne({ email });
        if (!user) throw new Error("first create account");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Incorrect email or password.");
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
