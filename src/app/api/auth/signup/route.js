// auth/signup/route.js
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    if ((!email, !password)) {
      return NextResponse.json(
        { error: "Please enter valid data." },
        { status: 422 },
      );
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        { error: "account have already existed" },
        {
          status: 422,
        },
      );
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json({ message: "User account created" },{status:201});
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "There is a problem connecting to the server." },
      {
        status: 500,
      },
    );
  }
}
