// module/TexyInput.js
export default function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const {name,value} = e.target
    setProfileData({...profileData,[name]:value})
  };

  return (
    <div className="text-slate-800">
      <p className="mb-1">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="border border-gray-300 rounded-md"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="px-2 py-1 border border-gray-300 rounded-md mb-6"
        />
      )}
    </div>
  );
}
