// template/SignupPage
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("The password and its repetition are not equal.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status == 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <section className="md:mt-10">
      <div className="flex flex-col items-center px-6 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-3 text-2xl">
          <img
            src="images/signupIcon.jpg"
            className="w-10 h-10 mr-2"
            alt="logo"
          />
          <h1 className="text-green-600">Real state</h1>
        </a>
        <div className="w-full bg-green-500 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <label className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@gmail.com"
                className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:outline-green-700 focus:ring-0 focus:border-transparent block w-full p-2.5 "
              />
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:outline-green-700 block w-full p-2.5 "
              />
              <label className="block mb-2 text-sm font-medium text-white">
                Confirm password
              </label>
              <input
                type="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:outline-green-700 block w-full p-2.5 "
              />

              {loading ? (
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#6FCF97"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperClass="m-auto mt-10 flex justify-center"
                />
              ) : (
                <button
                  type="submit"
                  onClick={signupHandler}
                  className="hover:scale-102 cursor-pointer w-full text-white bg-green-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
              )}
              <p className="text-sm font-light text-white">
                Already have an account?
                <Link href="/signin" className="ml-3">
                  Login here
                </Link>
              </p>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
}
