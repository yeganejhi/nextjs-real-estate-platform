// module/Sidebar.js
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
export default function Sidebar() {
  const places = ["Apartment", "Villa", "Store", "Office"];
  return (
    <div className="w-full sm:w-44 md:w-48 lg:w-52 h-fit mt-4 sm:mt-5 md:mt-6 lg:mt-7 rounded-md text-slate-600 p-3 sm:p-4 md:p-5 shadow-xl shadow-green-500/50">
      <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 text-green-600 text-base sm:text-lg md:text-xl">
        <p className="text-sm sm:text-base">categories</p>
        <HiFilter className="text-base sm:text-lg" />
      </div>
      <div className="flex flex-col mt-3 sm:mt-4 md:mt-5 gap-1.5 sm:gap-2">
        {places.map((place) => (
        <Link 
          className="rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm text-slate-700 hover:bg-green-200 transition-colors duration-200"
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