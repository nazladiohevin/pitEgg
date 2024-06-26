import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import Image from "next/image";
import Head from "next/head";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);

      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
    // sessionStorage
  };

  return (
    <>
      <Head>
        <title>Daftar Akun PitEgg</title>
      </Head>
      <main>
        <div className=" h-screen min-h-[700px] grid grid-cols-1 md:grid-cols-2">
          <div className="basis-1/2 py-10 px-6 relative bg-green-900/10 flex flex-col justify-center items-center">
            <div>
              <h1 className="text-5xl -mb-8 text-green-900 text-center font-extrabold sm:text-6xl md:text-7xl">
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
          <div className="basis-1/2 py-10 px-6 pt-20 flex flex-col items-center bg-green-900/15">
            <div className="w-full sm:w-4/5 lg:w-7/12">
              <div>
                <Image
                  src="/images/logo.svg"
                  width="500"
                  height="500"
                  className="mx-auto size-30 w-auto mb-10"
                  alt="PitEgg Logo"
                />
                <h4 className="my-10 text-3xl font-bold text-green-900">
                  Buat akun baru kamu...
                </h4>
              </div>
              <div className="flex flex-col gap-7">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold leading-6 text-green-900"
                  >
                    Nama
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                      required
                      placeholder="Suparmi (hanya contoh)"
                      onChange={(e) => setName(e.target.value)}
                      className="c-input w-full"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold leading-6 text-green-900"
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
                      className="block font-semibold leading-6 text-green-900"
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
                <Link href="/auth/login">
                  <button className="w-full bg-amber-600 py-3 rounded-lg text-white shadow-lg font-semibold text-xl transition-all hover:scale-105 ">
                    Daftar
                  </button>
                </Link>
                <p className="text-green-900">
                  Sudah memiliki akun?{" "}
                  <Link
                    href="/auth/login"
                    className="font-bold transition-all underline-offset-2 hover:underline-offset-4 hover:underline"
                  >
                    Masuk
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
