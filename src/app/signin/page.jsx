"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function onSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard", // Change this to your desired callback URL
    });
    console.log(result);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <section className="bg-white p-14 grid gap-14">
        {/* Form title */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Welcome back admin</h1>
          <p className="">Continue by logging into your admin account</p>
        </div>

        {/* Actual form */}
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="bg-[#EFF2FF] rounded">
            <input
              type="email"
              name="adminEmail"
              id="adminEmail"
              placeholder="Email address"
              className="w-full p-5 rounded-lg bg-[#EFF2FF] text-#4C5483"
              ref={emailRef}
            />
          </div>

          <div className="bg-[#EFF2FF] rounded">
            <input
              type="password"
              name="adminPassword"
              id="adminPassword"
              placeholder="Password"
              className="w-full p-5 rounded-lg bg-[#EFF2FF] text-#4C5483"
              ref={passwordRef}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-5 bg-[#576FF1] text-white rounded-lg"
            >
              Log into admin account
            </button>
          </div>
        </form>

        <div className="text-center">
          <p>I forgot my password somehow</p>
          <Link
            href="/resetpassword"
            className="
          text-[#576FF1]"
          >
            Reset password
          </Link>
        </div>
      </section>
    </main>
  );
}
