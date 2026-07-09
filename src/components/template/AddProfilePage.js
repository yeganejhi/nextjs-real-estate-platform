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
    <div>
      <h3 className="my-10 text-slate-800 text-3xl bg-green-200 p-3 rounded-md">
        {data ? "Edit ad" : "Register an ad"}
      </h3>

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
      <TextInput
        title="Price"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="Real state"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <RadioList profileData={profileData} setProfileData={setProfileData} />
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

      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#6FCF97"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperClass="m-auto mt-10"
        />
      ) : (
        <button
          onClick={data ? editHandler : submitHandler}
          className="bg-green-200 px-2 py-1 cursor-pointer rounded-sm my-12 text-slate-800 hover:scale-105 block"
        >
          {data ? "Edit ad" : "Register ad"}
        </button>
      )}
    </div>
  );
}
