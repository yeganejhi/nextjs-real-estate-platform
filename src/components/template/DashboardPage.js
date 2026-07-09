// template/DashboardPage.js
export default function DashboardPage({createdAt}) {
  return (
    <div className="text-slate-800">
      <h3>Hi 😊</h3>
      <p>Post your ads so that thousands of people can see them.</p>
      <div className="w-64 px-3 py-1 rounded-md flex gap-2 border border-green-500 mt-2 text-sm">
        <p>Date of membership: </p>
        <span>{new Date(createdAt).toLocaleDateString("en-GB")}</span>

      </div>
    </div>
  );
}
