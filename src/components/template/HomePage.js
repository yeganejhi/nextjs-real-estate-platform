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
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-15 mb-10">
      <div className="w-full mx-auto md:max-w-xl mt-10">
        <div>
          <h1 className="text-4xl md:text-4xl font-bold text-center mb-8 bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
            Property purchase and rental system
          </h1>
          <ul className="flex gap-5 justify-center">
            {services.map((i, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-linear-to-r from-green-300 to-green-500 px-3 py-1 rounded-lg text-white"
              >
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {places.map((place, index) => (
          <CategoryCard key={index} title={place} />
        ))}
      </div>
      <div>
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Most visited cities</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cities.map((i, index) => (
            <li key={index} className="flex items-center gap-2 bg-linear-to-r from-green-300 to-green-500 justify-center py-3 rounded-lg">
              <span>{i}</span>
              <FaCity />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
