// profile/publish/[profileId]/route.js
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const { profileId } = await params;
    const id = profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "please log in to your account" },
        { status: 401 },
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User account doesn't found",
        },
        { status: 404 },
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "Limited access" }, { status: 403 });
    }

    const profile = await Profile.findOne({ _id: id });
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }
    profile.published = true;
    await profile.save();

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "there is a problem with server" },
      { status: 500 },
    );
  }
}
