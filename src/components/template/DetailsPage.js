// template/DetailsPage.js
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendarCheck, BiStore } from "react-icons/bi";
import ShareButton from "@/module/ShareButton";

export default function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  const safeDate = constructionDate ? new Date(constructionDate).toLocaleDateString() : constructionDate;

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-3 md:p-4">
      <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <SiHomebridge className="text-green-600 text-4xl sm:text-5xl" />
            <p className="font-semibold text-gray-800 text-2xl sm:text-3xl">{realState}</p>
          </div>
          <span className="flex items-center gap-2 text-gray-600 px-2">
            <AiOutlinePhone className="text-green-600" />
            <span className="text-sm sm:text-base">{phone}</span>
          </span>
        </div>
        
        <div className="p-4 sm:p-5 md:p-7 border-b border-gray-100">
          <p className="flex items-center gap-2 mb-3 text-gray-800">
            <span className="text-green-600 text-lg sm:text-xl">{icons[category]}</span>
            <span className="font-medium text-sm sm:text-base">{category}</span>
          </p>
          <p className="text-xl sm:text-2xl font-bold text-green-600 mb-3">{price} $</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <BiCalendarCheck className="text-green-600" />
            {safeDate}
          </p>
        </div>
        
        <div className="p-4 sm:p-5">
          <ShareButton />
        </div>
      </aside>

      <main className="flex-1 bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent mb-2 sm:mb-3">{title}</h1>
        <span className="items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg inline-flex mb-4 sm:mb-6 text-sm sm:text-base">
          <HiOutlineLocationMarker className="text-green-600" />
          {location}
        </span>
        
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mt-4 sm:mt-6 mb-2 sm:mb-3">description</h3>
        <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>
        
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mt-4 sm:mt-6 mb-2 sm:mb-3">features</h3>
        {amenities.length ? (
          <ul className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {amenities.map((amenity, index) => (
              <li key={index} className="bg-gray-50 text-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border border-gray-100">
                {amenity}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">nothing to see</p>
        )}
        
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mt-4 sm:mt-6 mb-2 sm:mb-3">rules</h3>
        {rules.length ? (
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {rules.map((rule, index) => (
              <li key={index} className="bg-gray-50 text-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border border-gray-100">
                {rule}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm sm:text-base">nothing to see</p>
        )}
      </main>
    </div>
  );
}