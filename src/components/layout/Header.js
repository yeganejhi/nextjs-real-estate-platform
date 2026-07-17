// layout/Header.js
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CgLogIn } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";

export default function Header() {
  const { data } = useSession();

  return (
    <header
      className="
        w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-7xl mx-auto
        px-3 sm:px-4 md:px-6 lg:px-8
        my-2 sm:my-3 md:my-4
        flex flex-wrap items-center justify-between
        rounded-2xl
        border border-white/20
        bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700
        py-3 sm:py-4 md:py-5
        text-white
        shadow-xl shadow-emerald-900/30
        backdrop-blur-sm
        relative
        overflow-hidden
      "
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <nav className="relative z-10 w-auto">
        <ul className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-3 md:gap-x-4 lg:gap-x-6">
          <li>
            <Link
              href="/"
              className="group relative rounded-lg px-1.5 sm:px-2 md:px-3 py-1 text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <span className="relative z-10">Main Page</span>
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all duration-300 -z-0"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/60 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 -z-0"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/buy-residentials"
              className="group relative rounded-lg px-1.5 sm:px-2 md:px-3 py-1 text-xs sm:text-sm md:text-base font-medium text-white/90 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <span className="relative z-10">Buy-Residentials</span>
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all duration-300 -z-0"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/60 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 -z-0"></span>
            </Link>
          </li>
        </ul>
      </nav>

      {data ? (
        <Link
          href="/dashboard"
          className="group relative inline-flex items-center justify-center rounded-xl p-1.5 sm:p-2 hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/60 hover:scale-110 active:scale-95"
          aria-label="Go to dashboard"
          title="Dashboard"
        >
          <MdSpaceDashboard className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:rotate-12" />
          <span className="absolute -inset-1 rounded-xl bg-white/0 group-hover:bg-white/5 blur-sm transition-all duration-300 -z-10"></span>
        </Link>
      ) : (
        <Link
          href="/signup"
          className="
            group relative inline-flex items-center gap-x-1.5 sm:gap-x-2
            rounded-xl
            bg-white/15
            px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5
            text-xs sm:text-sm md:text-base
            font-semibold
            hover:bg-white/25
            active:scale-[0.98]
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-white/60
            whitespace-nowrap
            overflow-hidden
          "
        >
          <span className="relative z-10 flex items-center gap-x-1.5 sm:gap-x-2">
            <span>Log In</span>
            <CgLogIn className="text-base sm:text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        </Link>
      )}
    </header>
  );
}