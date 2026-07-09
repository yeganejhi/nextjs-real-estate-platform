// profile/route.js
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find({published:true}).select("-userId");
    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "there is a problem with server" },
      { status: 500 },
    );
  }
}
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
      phone,
    } = body;
    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { error: "Please log in to your account" },
        { status: 401 },
      );

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "User account not found" },
        { status: 404 },
      );

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "Please enter valid data" },
        { status: 400 },
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json({ message: "New ad added" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "There was a problem with the server" },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
      phone,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "Please log in to your account",
        },
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
    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 400 },
      );
    }
    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "You can not change this ad" },
        { status: 403 },
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    await profile.save();
    return NextResponse.json(
      { message: "The ad was successfully edited" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "There is a problem with the server." },
      { status: 500 },
    );
  }
}


