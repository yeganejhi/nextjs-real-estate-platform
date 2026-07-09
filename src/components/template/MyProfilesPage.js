// template/MyProfilesPage
import DashboardCard from "@/module/DashboardCard";

export default function MyProfilesPage({ profiles }) {
  return (
    <div className="flex flex-wrap gap-4">
        
      {profiles.length ? null : (<p>No add registered</p>)}
      {profiles.map((i) => 
        (<DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />)
      )}
    </div>
  );
}
