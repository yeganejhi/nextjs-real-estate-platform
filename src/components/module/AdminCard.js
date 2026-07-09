// module/AdminCard.js
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";

export default function AdminCard({
  data: { title, description, location, price, _id },
}) {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/deleteByAdmin/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 p-3 border border-gray-100 w-full max-w-70">
      <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mb-3 pb-2 border-b">
        <span className="bg-gray-50 px-2 py-0.5 rounded-full text-xs truncate max-w-30">📍 {location}</span>
        <span className="font-semibold text-green-600 text-sm whitespace-nowrap"> {price?.toLocaleString() || 0} $</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            onClick={publishHandler}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-1.5 px-2 rounded-md transition-colors duration-200 cursor-pointer hover:scale-105"
          >
             Publish
          </button>
          <button
            onClick={deleteHandler}
            className="flex-1 bg-red-400 hover:bg-red-600 text-white text-sm font-medium py-1.5 px-2 rounded-md transition-colors duration-200 cursor-pointer hover:scale-105"
          >
            🗑️ Delete
          </button>
        </div>
        <Link
          href={`/buy-residentials/${_id}`}
          className="flex items-center justify-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition-colors font-medium py-1 border-t pt-2"
        >
          More Details <FaArrowRight size={10} />
        </Link>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}