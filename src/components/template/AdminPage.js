// template/AdminPage.js
import AdminCard from "@/module/AdminCard";

export default function AdminPage({ profiles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.length ? null : <p>No ad to accept</p>}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}
