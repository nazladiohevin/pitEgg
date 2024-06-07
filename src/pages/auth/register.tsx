import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

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
  }

  return (    
    <main>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 lg:px-8">
        <div className="bg-green-900 w-full py-10 rounded-xl md:w-[70%]">
          <div className="mb-14">
            <Link href={"/"}>
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Daftar menjadi mitra kami
            </h2>
          </div>
          <div className="flex gap-x-20 px-10 gap-y-5 flex-wrap md:flex-nowrap">
            <div className="basis-full space-y-5 md:basis-1/2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nama Pemilik
                </label>
                <div className="mt-2">
                  <input
                    id="owner-name"
                    name="owner-name"
                    type="text"
                    autoComplete="off"
                    required
                    placeholder="John Doe"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="c-input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nomor Telepon
                </label>
                <div className="mt-2">
                  <input
                    id="telp"
                    name="telp"
                    type="number"
                    autoComplete="off"
                    required
                    placeholder="081xxxxxxx"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="c-input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Alamat
                </label>
                <div className="mt-2">
                  <textarea 
                    name="addresse" 
                    id="addresse" 
                    placeholder="Alamat anda..."
                    className="c-input"                    
                  ></textarea>                  
                </div>
              </div>
            </div>
            <div className="basis-full space-y-5 md:basis-1/2">
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
                    // onChange={(e) => setEmail(e.target.value)}
                    className="c-input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required                    
                    // onChange={(e) => setEmail(e.target.value)}
                    className="c-input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Konfirmasi Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="off"
                    required
                    // onChange={(e) => setEmail(e.target.value)}
                    className="c-input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button className="flex w-min justify-center rounded-md bg-amber-600 px-36 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors ease-out">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </main>    
  );
}