"use client";
import { useRouter } from "next/navigation";
import Card from "./Card";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardCard({ data }) {
  const router = useRouter();
  
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
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
    <div className="text-slate-800 bg-green-200 w-full h-full p-3 rounded-lg flex flex-col justify-between overflow-hidden">
      
      <div className="flex-1 w-full min-w-0">
        <Card data={data} />
      </div>

      <div className="flex flex-row justify-between items-center mt-4 gap-2">
        <button
          onClick={editHandler}
          className="bg-green-400 flex flex-1 justify-center items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:scale-105 transition-transform text-sm font-medium"
        >
          Edit <FiEdit />
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-400 flex flex-1 justify-center items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:scale-105 transition-transform text-sm font-medium"
        >
          Delete <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}