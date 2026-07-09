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
    <div className="flex w-full md:max-w-5xl mx-auto gap-8 p-3">
      <aside className="w-64  bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col my-auto">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <SiHomebridge className="text-green-600 text-5xl" />
            <p className="font-semibold text-gray-800 text-3xl">{realState}</p>
          </div>
          <span className="flex items-center gap-2 text-gray-600 px-2 ">
            <AiOutlinePhone className="text-green-600 " />
            {phone}
          </span>
        </div>
        
        <div className="p-7 border-b border-gray-100">
          <p className="flex items-center gap-2 mb-3 text-gray-800">
            <span className="text-green-600 text-xl">{icons[category]}</span>
            <span className="font-medium">{category}</span>
          </p>
          <p className="text-2xl font-bold text-green-600 mb-3">{price} $</p>
          <p className="flex items-center gap-2 text-gray-500">
            <BiCalendarCheck className="text-green-600" />
            {safeDate}
          </p>
        </div>
        
        <div className="p-5">
          <ShareButton />
        </div>
      </aside>

      <main className="flex-1 bg-white rounded-2xl shadow-sm p-6">
        <h1 className="text-3xl font-bold bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent mb-3">{title}</h1>
        <span className="items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg inline-flex mb-6">
          <HiOutlineLocationMarker className="text-green-600" />
          {location}
        </span>
        
        <h3 className="font-semibold text-gray-800 text-lg mt-6 mb-3">description</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        
        <h3 className="font-semibold text-gray-800 text-lg mt-6 mb-3">fetears</h3>
        {amenities.length ? (
          <ul className="flex flex-wrap gap-2 mb-6">
            {amenities.map((amenity, index) => (
              <li key={index} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-100">
                {amenity}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mb-6">nothing to see</p>
        )}
        
        <h3 className="font-semibold text-gray-800 text-lg mt-6 mb-3">fetears</h3>
        {rules.length ? (
          <ul className="flex flex-wrap gap-2">
            {rules.map((rule, index) => (
              <li key={index} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-100">
                {rule}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">nothing to see</p>
        )}
      </main>
    </div>
  );
}