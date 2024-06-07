"use client";
import Link from "next/link";
import Layout from "@/components/templates/Layout";
import { useEffect, useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app, auth } from "@/firebase/config";
import { useRouter } from "next/router";
import { getDatabase, ref, child, get } from "firebase/database";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);

      setEmail("");
      setPassword("");

      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="h-screen min-h-[700px] flex flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="bg-green-900 p-5 rounded-t-xl box-content sm:mx-auto sm:w-full sm:max-w-sm sm:p-8">
          <Link href={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Masuk ke akunmu
          </h2>
        </div>

        <div className="bg-green-900 p-5 rounded-b-xl box-content pt-10 sm:mx-auto sm:w-full sm:max-w-sm sm:p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="contoh@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="c-input"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="c-input"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => handleLogin()}
                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors ease-out"
              >
                Masuk
              </button>
            </div>
          </div>
          <p className="mt-10 text-left text-sm text-white">
            Belum punya akun?
            <Link
              href="/auth/register"
              className="ml-2 font-bold leading-6 text-white hover:text-green-400 hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
