// template/AdminPage.js
import AdminCard from "@/module/AdminCard";

export default function AdminPage({ profiles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
      {profiles.length ? null : <p className="col-span-full text-center text-gray-500 py-8 text-sm sm:text-base">No ad to accept</p>}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}