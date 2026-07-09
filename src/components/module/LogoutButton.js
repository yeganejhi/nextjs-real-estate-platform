// module/LogoutButton.js
"use client"
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button className="flex rounded-lg gap-2 px-3 text-red-500 hover:bg-red-200 cursor-pointer py-1" onClick={signOut}>
        Log out
    </button>
  )
}
