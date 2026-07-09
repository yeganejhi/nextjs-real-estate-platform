// module/TextList.js
"use client";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
export default function TextList({ title, profileData, setProfileData, type }) {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };
  const deleteHandler =(index)=>{
    const list = [...profileData[type]]
    list.splice(index,1)
    setProfileData({...profileData,[type]:list})

  }

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className="text-slate-800 mb-10">
      <p className="mb-2">{title}</p>

      {profileData[type].map((i, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            value={i}
            className="px-2 py-1 border border-gray-300 rounded-md"
            onChange={(e) => changeHandler(e, index)}
          />
          <button className="bg-red-300 px-2 text-white rounded-md flex items-center gap-2 cursor-pointer hover:scale-105" onClick={()=>deleteHandler(index)}>
            
            <AiOutlineDelete className="text-lg" />
          </button>
        </div>
      ))}
      <button
        onClick={addHandler}
        className="bg-green-600 text-sm w-fit px-2 py-1 text-white rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 mt-3"
      >
        Add
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}
