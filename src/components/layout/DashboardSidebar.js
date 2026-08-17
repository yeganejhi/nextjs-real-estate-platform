import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default async function DashboardSidebar({ children, email, role }) {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-6xl mx-auto px-2 sm:px-4 flex-1">
    
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start mt-4 md:mt-6">
        
        <aside className="w-full md:w-56 lg:w-64 h-fit rounded-xl p-4 shadow-lg shadow-green-500/30 md:shadow-green-500/40 bg-white/95 backdrop-blur-sm md:backdrop-blur-none border border-green-100/50">
          
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-center gap-3 border-b border-green-100 pb-4 mb-4">
            <div className="flex items-center md:flex-col gap-2">
              <CgProfile className="text-4xl md:text-5xl text-green-600" />
              {role === "ADMIN" && (
                <span className="text-[10px] sm:text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">
                  Admin
                </span>
              )}
            </div>
            
            <p className="text-xs sm:text-sm font-medium text-slate-600 truncate max-w-[150px] sm:max-w-[200px] md:max-w-full text-right md:text-center" title={email}>
              {email}
            </p>
          </div>

          {/* لینک‌های منو */}
          <nav className="flex flex-wrap md:flex-col gap-2 justify-center md:justify-start">
            <Link
              className="w-auto md:w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-colors font-medium text-center md:text-left bg-green-50/50 md:bg-transparent"
              href="/dashboard"
            >
              User account
            </Link>
            <Link
              className="w-auto md:w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-colors font-medium text-center md:text-left bg-green-50/50 md:bg-transparent"
              href="/dashboard/add"
            >
              Register ad
            </Link>
            <Link
              className="w-auto md:w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-colors font-medium text-center md:text-left bg-green-50/50 md:bg-transparent"
              href="/dashboard/my-profiles"
            >
              My ads
            </Link>
            {role === "ADMIN" && (
              <Link
                href="/admin"
                className="w-auto md:w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-700 hover:bg-green-100 hover:text-green-700 transition-colors font-medium text-center md:text-left bg-green-50/50 md:bg-transparent"
              >
                Awaiting confirmation
              </Link>
            )}
            
            <div className="hidden md:block w-full mt-2 border-t border-green-50 pt-2"></div>
            
            <div className="w-auto md:w-full">
              <LogoutButton />
            </div>
          </nav>
        </aside>

        <main className="flex-1 w-full min-w-0 text-slate-900 pb-8 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}