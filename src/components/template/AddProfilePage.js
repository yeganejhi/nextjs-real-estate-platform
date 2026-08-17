// template/AddProfilePage.js
"use client";

import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";

export default function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      router.push("/dashboard/my-profiles")

    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };
  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      {/* Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 shadow-lg shadow-green-500/20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <h3 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          {data ? "✏️ Edit Ad" : "📝 Register an Ad"}
        </h3>
        <p className="relative text-white/80 text-sm sm:text-base mt-2 text-center sm:text-left">
          {data ? "Update your property information" : "Fill in the details to list your property"}
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-100/50 p-4 sm:p-6 md:p-8 border border-gray-100">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <TextInput
            title="Ad Title"
            name="title"
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInput
            title="Description"
            name="description"
            profileData={profileData}
            setProfileData={setProfileData}
            textarea={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <TextInput
              title="Address"
              name="location"
              profileData={profileData}
              setProfileData={setProfileData}
            />
            <TextInput
              title="Phone Number"
              name="phone"
              profileData={profileData}
              setProfileData={setProfileData}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <TextInput
              title="Price ($)"
              name="price"
              profileData={profileData}
              setProfileData={setProfileData}
            />
            <TextInput
              title="Real Estate Agency"
              name="realState"
              profileData={profileData}
              setProfileData={setProfileData}
            />
          </div>

          <RadioList profileData={profileData} setProfileData={setProfileData} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <TextList
              title="Amenities"
              profileData={profileData}
              setProfileData={setProfileData}
              type="amenities"
            />
            <TextList
              title="Rules"
              profileData={profileData}
              setProfileData={setProfileData}
              type="rules"
            />
          </div>

          <div className="pt-2">
            <CustomDatePicker
              profileData={profileData}
              setProfileData={setProfileData}
            />
          </div>
        </div>
      </div>

      <Toaster />
      
      {loading ? (
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#10B981"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end">
          <button
            onClick={data ? editHandler : submitHandler}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 sm:px-8 py-3 sm:py-3.5 text-white font-semibold text-sm sm:text-base shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {data ? "✏️ Edit Ad" : "📝 Register Ad"}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </div>
  );
}