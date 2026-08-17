import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Card({ data: { _id, category, title, location, price } }) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* بخش بالا */}
      <div className="flex flex-row justify-between items-center gap-2 mb-4">
        
        <div className="flex items-center gap-1.5 text-green-600 font-semibold flex-1 min-w-0">
          <span className="text-lg shrink-0">{icons[category]}</span>
          <span className="text-base text-gray-900 truncate" title={title}>
            {title}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm shrink-0">
          <HiOutlineLocationMarker className="text-base shrink-0" />
          <span className="truncate max-w-[90px] sm:max-w-[120px]" title={location}>
            {location}
          </span>
        </div>
      </div>

      {/* بخش پایین */}
      <div className="flex flex-row justify-between items-center gap-2 mt-auto pt-3 border-t border-gray-50">
        <span className="text-base font-bold text-green-700 truncate">
          {price.toLocaleString()}$
        </span>
        
        <Link 
          href={`/buy-residentials/${_id}`}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium shrink-0"
        >
          More details <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
}