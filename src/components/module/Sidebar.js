// module/Sidebar.js
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
export default function Sidebar() {
  const places = ["Apartment", "Villa", "Store", "Office"];
  return (
    <div className="w-48 h-64 mt-7 rounded-md text-slate-600 p-5 shadow-xl shadow-green-500/50">
      <div className="flex items-center gap-3 px-3 text-green-600 text-xl">
        <p>categories</p>
        <HiFilter />
      </div>
      <div className="flex flex-col mt-5 gap-2">
        {places.map((place) => (
        <Link className="rounded-lg px-3 py-1 text-slate-700 hover:bg-green-200"
        key={place}
          href={{
            pathname: "/buy-residentials",
            query: { category:  place  },
          }}
        >
          {place}
        </Link>
      ))}
      </div>
      
    </div>
  );
}
