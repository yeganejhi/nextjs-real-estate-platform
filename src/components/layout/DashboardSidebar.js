// layout/DashboardSidebar.js
import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default async function DashboardSidebar({ children, email, role }) {
  return (
    <div className="w-full mx-auto md:max-w-3xl lg:max-w-5xl">
      <div className="flex gap-6 text-white min-h-[calc(100vh-4rem)]">
        <aside className="w-48 h-fit mt-7 rounded-md text-slate-600 p-4 shadow-xl shadow-green-500/50 sticky top-7">
          <div className="flex flex-col items-center gap-3 border-b pb-2">
            <CgProfile className="text-4xl text-green-700" />
            {role == "ADMIN" ? <p>Admin</p> : null}
            <p className="text-sm font-semibold text-slate-600 break-all text-center">{email}</p>
          </div>

          <nav className="mt-2 flex flex-col gap-1">
            <Link
              className="rounded-lg px-3 py-1 text-slate-700 hover:bg-green-200 transition-colors duration-200"
              href="/dashboard"
            >
              User account
            </Link>
            <Link
              className="rounded-lg px-3 py-1 text-slate-700 hover:bg-green-200 transition-colors duration-200"
              href="/dashboard/add"
            >
              Register ad
            </Link>
            <Link
              className="rounded-lg px-3 py-1 text-slate-700 hover:bg-green-200 transition-colors duration-200"
              href="/dashboard/my-profiles"
            >
              My ads
            </Link>
            {role == "ADMIN" ? (
              <Link
                href="/admin"
                className="rounded-lg px-3 py-1 text-slate-700 hover:bg-green-200 transition-colors duration-200"
              >
                Awaiting confirmation
              </Link>
            ) : null}
            <LogoutButton />
          </nav>
        </aside>

        <main className="flex-1 min-w-0 text-slate-900 mt-7">{children}</main>
      </div>
    </div>
  );
}