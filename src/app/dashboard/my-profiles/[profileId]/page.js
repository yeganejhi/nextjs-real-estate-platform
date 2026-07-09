// dashboard/my-profiles/[profileId]/page.js
import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";

export default async function EditPage({ params }) {
  const { profileId } = await params;

  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>There was a problem, please try again.</h3>;
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}
