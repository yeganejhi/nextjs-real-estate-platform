import DashboardCard from "@/module/DashboardCard";

export default function MyProfilesPage({ profiles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 w-full">
      {profiles.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 py-8 text-sm sm:text-base">
          No ad registered
        </p>
      ) : (
        profiles.map((i) => (
          <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
        ))
      )}
    </div>
  );
}