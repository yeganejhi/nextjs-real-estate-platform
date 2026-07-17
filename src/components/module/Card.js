// module/Card.js
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Card({ data: { _id,category, title, location, price } }) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 text-green-600 font-semibold">
          <span className="text-base sm:text-lg">{icons[category]}</span>
          <span className="text-sm sm:text-base text-gray-900">{title}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
          <HiOutlineLocationMarker className="text-sm sm:text-base" />
          <span className="truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px]">{location}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-4 sm:mt-6">
        <span className="text-base sm:text-lg font-bold text-green-700">{price.toLocaleString()}$</span>
        
        <Link 
          href={`/buy-residentials/${_id}` }
          className="flex items-center gap-1 text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          More details <FaArrowRight className="text-xs sm:text-sm" />
        </Link>
      </div>
    </div>
  );
}