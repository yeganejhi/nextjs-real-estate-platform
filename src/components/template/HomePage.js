// template/HomePage
import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa6";

export default function HomePage() {
  const services = ["Buy", "Sell", "Rent", "Mortgage"];
  const cities = [
    "London",
    "NewYork",
    "Milan",
    "Rom",
    "Paris",
    "California",
    "Los Angeles",
    "Toronto",
  ];
  const places = ["villa", "apartment", "office", "store"];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-15 mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 sm:py-0 md:px-5 lg:px-6 py-4 md:py-2">
      <div className="w-full mx-auto md:max-w-xl mt-1 sm:mt-8 md:mt-10">
        <div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-7 lg:mb-8 bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
            Property purchase and rental system
          </h1>
          <ul className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center">
            {services.map((i, index) => (
              <li
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-green-300 to-green-500 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg text-white text-xs sm:text-sm md:text-base"
              >
                <FiCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-center">
        {places.map((place, index) => (
          <CategoryCard key={index} title={place} />
        ))}
      </div>
      
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
          Most visited cities
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {cities.map((i, index) => (
            <li 
              key={index} 
              className="flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-green-300 to-green-500 justify-center py-2 sm:py-2.5 md:py-3 px-2 sm:px-2.5 md:px-3 rounded-lg text-amber-50 text-xs sm:text-sm md:text-base break-words text-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
            >
              <span className="truncate max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">{i}</span>
              <FaCity className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}