import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = ({ className }: { className: string }) => {
  const router = useRouter();
  const berandaRef = useRef(null);
  const benefitRef = useRef(null);
  const fiturRef = useRef(null);
  const kontakKamiRef = useRef(null);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur transition-all duration-500 ease-in ${
        visible ? "top-0" : "-top-24"
      }`}
    >
      <div
        className={`navbar bg-green-950/40 text-white shadow-md ${className} px-4 lg:px-9`}
      >
        <div className="navbar-start space-x-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon="charm:menu-hamburger" className="size-10" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-4 px-5 space-y-1 w-max text-base shadow bg-green-900 rounded-box"
            >
              {/* Buat versi mini */}
              <li className="p-2">Beranda</li>
              <li className="p-2">Benefit</li>
              <li className="p-2">Fitur</li>
              <li className="p-2">Kontak kami</li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              width={65}
              height={65}
              src={"images/logo.svg"}
              alt="PitEgg Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-8 font-semibold text-base">
            <li className="underline-offset-2 transition-all cursor-pointer hover:underline hover:underline-offset-4">
              Beranda
            </li>
            <li className="underline-offset-2 transition-all cursor-pointer hover:underline hover:underline-offset-4">
              Benefit
            </li>
            <li className="underline-offset-2 transition-all cursor-pointer hover:underline hover:underline-offset-4">
              Fitur
            </li>
            <li className="underline-offset-2 transition-all cursor-pointer hover:underline hover:underline-offset-4">
              Kontak Kami
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link
            href={"/auth/login"}
            className="btn btn-md bg-transparent btn- font-semibold border-white border-4 text-white hover:bg-white hover:border-white hover:text-green-950"
          >
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
