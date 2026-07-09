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
        w-full mx-auto
        md:max-w-3xl lg:max-w-5xl
        px-4 sm:px-6 md:px-8
        my-2
        flex items-center justify-between
        rounded-xl
        border border-white/10
        bg-linear-to-r from-emerald-600 to-green-600
        py-4
        text-white
        shadow-lg shadow-emerald-900/20
        backdrop-blur
      "
    >
      <nav>
        <ul className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6">
          <li>
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-sm sm:text-base font-medium text-white/90 hover:text-white hover:p-2 hover:bg-white/10 transition-colors"
            >
              Main Page
            </Link>
          </li>
          <li>
            <Link
              href="/buy-residentials"
              className="rounded-md px-2 py-1 text-sm sm:text-base font-medium text-white/90 hover:text-white hover:p-2 hover:bg-white/10 transition-colors"
            >
              Buy-Residentials
            </Link>
          </li>
        </ul>
      </nav>

      {data ? (
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Go to dashboard"
          title="Dashboard"
        >
          <MdSpaceDashboard className="text-3xl" />
        </Link>
      ) : (
        <Link
          href="/signup"
          className="
            inline-flex items-center gap-x-2
            rounded-lg
            bg-white/15
            px-3 py-2
            text-sm sm:text-base
            font-semibold
            hover:bg-white/25
            active:scale-[0.98]
            transition
            focus:outline-none focus:ring-2 focus:ring-white/60
          "
        >
          <span>Log In</span>
          <CgLogIn className="text-lg" />
        </Link>
      )}
    </header>
  );
}
