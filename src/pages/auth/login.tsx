"use client";
import Link from "next/link";
import Layout from "@/components/templates/Layout";
import { useEffect, useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app, auth } from "@/firebase/config";
import { useRouter } from "next/router";
import { getDatabase, ref, child, get } from "firebase/database";
import Image from "next/image";

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
      <div className="bg-green-900 h-screen min-h-[700px] grid grid-cols-1 md:grid-cols-2">
        <div className="basis-1/2 py-10 px-6 bg-green-900 relative flex flex-col justify-center items-center">
          <div>
            <h1 className="text-5xl -mb-8 text-white text-center font-extrabold sm:text-6xl md:text-7xl">
              Selamat Datang
            </h1>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/chicken-1.webp"}
              alt="smile chicken"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
        <div className="basis-1/2 py-10 px-6 pt-20 flex flex-col items-center bg-green-800">
          <div className="w-full sm:w-4/5 lg:w-7/12">
            <div>
              <Image
                src="/images/logo.svg"
                width="500"
                height="500"
                className="mx-auto size-30 w-auto mb-10"
                alt="PitEgg Logo"
              />
              <h4 className="mb-5 text-3xl font-bold text-green-100">
                Masuk ke akun kamu..
              </h4>
            </div>
            <div className="flex flex-col gap-7">
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-white"
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
                    className="c-input w-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block font-semibold leading-6 text-white"
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
            </div>
            <div className="mt-16 space-y-4">
              <button className="w-full bg-amber-600 py-3 rounded-lg text-white shadow-lg font-semibold text-xl transition-all hover:scale-105 ">
                Masuk
              </button>
              <p className="text-white">
                Belum punya akun?{" "}
                <Link
                  href="/auth/register"
                  className="font-bold transition-all underline-offset-2 hover:underline-offset-4 hover:underline"
                >
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
