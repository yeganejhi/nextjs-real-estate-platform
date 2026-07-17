// layout/DashboardSidebar.js
import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default async function DashboardSidebar({ children, email, role }) {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] max-w-5xl mx-auto px-2 sm:px-3 md:px-4 flex-1">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 text-white items-start">
        <aside className="w-full sm:w-48 md:w-52 lg:w-56 h-fit mt-4 sm:mt-5 md:mt-6 lg:mt-7 rounded-xl sm:rounded-md text-slate-600 p-4 sm:p-4 shadow-lg sm:shadow-xl shadow-green-500/30 sm:shadow-green-500/50 bg-white/90 sm:bg-white backdrop-blur-sm sm:backdrop-blur-none border border-green-100/50 sm:border-none">
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 sm:gap-3 border-b border-green-100 pb-2 sm:pb-2">
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <CgProfile className="text-3xl sm:text-4xl text-green-600 sm:text-green-700" />
              {role == "ADMIN" ? <p className="text-xs sm:text-sm font-medium text-green-700 sm:text-slate-600">Admin</p> : null}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 break-all text-right sm:text-center max-w-[120px] sm:max-w-none">
              {email}
            </p>
          </div>

          <nav className="mt-3 sm:mt-2 flex flex-row sm:flex-col flex-wrap gap-1.5 sm:gap-1 justify-center sm:justify-start">
            <Link
              className="rounded-lg px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-all duration-200 font-medium bg-green-50/50 sm:bg-transparent"
              href="/dashboard"
            >
               User account
            </Link>
            <Link
              className="rounded-lg px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-all duration-200 font-medium bg-green-50/50 sm:bg-transparent"
              href="/dashboard/add"
            >
               Register ad
            </Link>
            <Link
              className="rounded-lg px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-all duration-200 font-medium bg-green-50/50 sm:bg-transparent"
              href="/dashboard/my-profiles"
            >
               My ads
            </Link>
            {role == "ADMIN" ? (
              <Link
                href="/admin"
                className="rounded-lg px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-all duration-200 font-medium bg-green-50/50 sm:bg-transparent"
              >
                 Awaiting confirmation
              </Link>
            ) : null}
            <div className="w-full sm:w-auto">
              <LogoutButton />
            </div>
          </nav>
        </aside>

        <main className="flex-1 min-w-0 text-slate-900 mt-4 sm:mt-5 md:mt-6 lg:mt-7 px-1 sm:px-2 pb-8 sm:pb-0">{children}</main>
      </div>
    </div>
  );
}