// template/MyProfilesPage
import DashboardCard from "@/module/DashboardCard";

export default function MyProfilesPage({ profiles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
      {profiles.length ? null : (<p className="col-span-full text-center text-gray-500 py-8 text-sm sm:text-base">No add registered</p>)}
      {profiles.map((i) => 
        (<DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />)
      )}
    </div>
  );
}