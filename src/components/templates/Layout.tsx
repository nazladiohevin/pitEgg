import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-green-900">
        <Navbar className={inter.className} />
        <main className={`flex flex-col gap-y-64 ${inter.className}`}>
          {children}
        </main>
        <Footer className={inter.className} />
      </div>
    </>
  );
}
