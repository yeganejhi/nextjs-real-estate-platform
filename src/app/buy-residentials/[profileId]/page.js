// buy-residentials/[profileId]/page.js
import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

export default async function ProfileDetails({ params }) {
  const { profileId } = await params;

  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>there is something wrong</h3>;
  return <DetailsPage data={profile} />;
}
