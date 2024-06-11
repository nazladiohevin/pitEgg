"use client";
import React from "react";
import CardDataStats from "@/components/atoms/admin/CardDataStats";
import AdminLayout from "@/components/templates/AdminLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase/config";

const DashboardPage = () => {
  // TANGKAP DATA REALTIME
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, "user/1/electricity");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
      console.log(data);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(data); // Data akan muncul di console ketika ada perubahan
  }, [data]);

  /**
   * Mencari nilai
   * Rate: dibandingkan dengan rata-rata dari (suhu, kelembapan, etx) stabil untuk ayam petelur
   */
  const stats = [
    {
      title: "Suhu",
      total: "22 °C",
      rate: "2%",
      levelUp: false,
      levelDown: true,
      children: (
        <Icon icon="carbon:temperature-max" className="text-white size-6" />
      ),
    },
    {
      title: "Kelembapan Udara",
      total: "22 %",
      rate: "",
      levelUp: false,
      levelDown: false,
      children: <Icon icon="carbon:humidity" className="text-white size-6" />,
    },
    {
      title: "Gas Amonia",
      total: "30 ppm",
      rate: "0.9%",
      levelUp: true,
      levelDown: false,
      children: <Icon icon="iconoir:gas" className="text-white size-6" />,
    },
    {
      title: "Jumlah Telur",
      total: "56 butir telur",
      rate: "",
      levelUp: false,
      levelDown: false,
      children: (
        <Icon icon="material-symbols:egg" className="text-white size-6" />
      ),
    },
  ];

  return (
    <>
      <AdminLayout>
        <h4 className="font-bold text-4xl mb-1">Data perHari</h4>
        <small className="block font-medium italic mb-6">
          Klik untuk detail lebih lanjut
        </small>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {stats.map((stat, index) => (
            <CardDataStats {...stat} key={index}>
              {stat.children}
            </CardDataStats>
          ))}
        </div>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-15">
          <div className="pt-6 pb-22 px-9 w-full shadow-slate-300 bg-white rounded-lg shadow-lg">
            <h4 className="font-extrabold text-2xl">Konsumsi Listrik</h4>
            <div className="mt-24 text-center">
              <p className="text-slate-700 font-extrabold text-5xl md:text-6xl">
                30 Watt
                <span className="text-base no-underline font-normal">
                  /hari
                </span>
              </p>
            </div>
          </div>
          <div className="pt-6 pb-22 px-9 w-full shadow-slate-300 bg-white rounded-lg shadow-lg">
            <h4 className="font-extrabold text-2xl">Estimasi Bayar Listrik</h4>
            <div className="mt-24 text-center">
              <p className="text-slate-700 font-extrabold text-5xl md:text-6xl">
                <span>Rp 123.000</span>
                <span className="text-base font-normal">/bulan</span>
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default DashboardPage;
