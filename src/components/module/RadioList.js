// module/RadioList.js
export default function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className="flex flex-col gap-3 mt-5 mb-5">
      <p className="text-slate-800">Categories</p>
      <main className="flex md:gap-5 md:flex-row flex-col gap-2">
        <div className="bg-green-100 px-2 py-1 rounded-lg text-slate-800 hover:scale-105">
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category == "villa"}
            onChange={changeHandler}
          />
          <label htmlFor="villa" className="px-2">
            villa
          </label>
        </div>
        <div className="bg-green-100 px-2 py-1 rounded-lg text-slate-800 hover:scale-105">
          {" "}
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category == "apartment"}
            onChange={changeHandler}
          />
          <label htmlFor="apartment" className="px-2">
            apartment
          </label>
        </div>
        <div className="bg-green-100 px-2 py-1 rounded-lg text-slate-800 hover:scale-105">
          {" "}
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category == "store"}
            onChange={changeHandler}
          />
          <label htmlFor="store" className="px-2">
            store
          </label>
        </div>
        <div className="bg-green-100 px-2 py-1 rounded-lg text-slate-800 hover:scale-105">
          {" "}
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category == "office"}
            onChange={changeHandler}
          />
          <label htmlFor="office" className="px-2">
            office
          </label>
        </div>
      </main>
    </div>
  );
}
