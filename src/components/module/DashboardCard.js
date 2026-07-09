// module/DashboardCard
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
    <div className="text-slate-800 mb-4 bg-green-200 w-64 p-3 rounded-lg">
      <Card data={data} />
      <div className="flex justify-between mt-4">
        <button
          onClick={editHandler}
          className="bg-green-400 flex items-center gap-3 px-2 rounded-md cursor-pointer hover:scale-105"
        >
          Edit <FiEdit />
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-400 flex items-center gap-3 px-3 py-1 rounded-md cursor-pointer hover:scale-105"
        >
          Delete <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}
