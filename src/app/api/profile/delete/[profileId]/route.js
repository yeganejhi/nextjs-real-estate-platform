// api/delete/[profileId]
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const { profileId } = await context.params;
    const id = profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Please log in to your account" },
        { status: 401 },
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "User account not found" },
        { status: 404 },
      );
    }
    const profile = await Profile.findOne({ _id: id });
    if (!profile) {
  return NextResponse.json(
    { error: "Profile not found" },
    { status: 404 }
  );
}
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "Your access to this ad is restricted" },
        { status: 403 },
      );
    }
    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "The desired ad was deleted" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "something is wrong with server" },
      { status: 500 },
    );
  }
}
