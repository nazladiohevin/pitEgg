"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-slate-900 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 text-white font-bold text-3xl lg:py-6.5">
        <Link href="/" className="flex w-full items-center justify-center">
          <Image
            width={176}
            height={32}
            src={"/images/logo.svg"}
            alt="Logo"
            className="size-20"
          />
          {/* PitEgg */}
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/dashboard/home"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out text-white hover:bg-meta-4 ${
                    pathname.includes("home") && "bg-slate-600"
                  }`}
                >
                  <Icon
                    icon="ri:dashboard-fill"
                    width={18}
                    height={18}
                    className="fill-current"
                  />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/monitoring"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out text-white hover:bg-meta-4 ${
                    pathname.includes("monitoring") && "bg-slate-600"
                  }`}
                >
                  <Icon
                    icon="material-symbols:monitoring-rounded"
                    width={18}
                    height={18}
                    className="fill-current"
                  />
                  Monitoring
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/controlling"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out text-white hover:bg-meta-4 ${
                    pathname.includes("controlling") && "bg-slate-600"
                  }`}
                >
                  <Icon
                    icon="mdi:controller-right"
                    width={18}
                    height={18}
                    className="fill-current"
                  />
                  Kontroling
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/dashboard/report"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out text-white hover:bg-meta-4 ${
                    pathname.includes("report") && "bg-slate-600"
                  }`}
                >
                  <Icon
                    icon="carbon:report"
                    width={18}
                    height={18}
                    className="fill-current"
                  />
                  Laporan
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/help"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out text-white hover:bg-meta-4 ${
                    pathname.includes("help") && "bg-slate-600"
                  }`}
                >
                  <Icon
                    icon="material-symbols:help-outline"
                    width={18}
                    height={18}
                    className="fill-current"
                  />
                  Bantuan
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
