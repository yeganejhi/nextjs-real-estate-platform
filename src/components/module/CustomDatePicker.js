// module/CustomDatePicker
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
export default function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };
  return (
    <div className="text-slate-800">
      <h3>construction Date</h3>
      <DatePicker
        value={profileData.constructionDate}
        onChange={changeHandler}
        className="green"
        inputClass="custom-input"
      />
    </div>
  );
}
