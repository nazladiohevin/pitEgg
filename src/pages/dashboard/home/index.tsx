"use client";
import React from "react";
import CardDataStats from "@/components/atoms/admin/CardDataStats";
import AdminLayout from "@/components/templates/AdminLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const DashboardPage = () => {
  
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
      children: (<Icon icon="carbon:temperature-max" className="text-white size-6" />)
    },
    {
      title: "Kelembapan Udara",
      total: "22 %",
      rate: "",
      levelUp: false,
      levelDown: false,
      children: (<Icon icon="carbon:humidity" className="text-white size-6" />)
    },
    {
      title: "Gas Amonia",
      total: "30 ppm",
      rate: "0.9%",
      levelUp: true,
      levelDown: false,
      children: (<Icon icon="iconoir:gas" className="text-white size-6" />)
    },
    {
      title: "Listrik",
      total: "22 Watt",
      rate: "",
      levelUp: false,
      levelDown: false,
      children: (<Icon icon="mdi:electricity" className="text-white size-6" />)
    },
  ];  

  return (
    <>
      <AdminLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          { stats.map((stat, index) => (
            <CardDataStats {...stat} key={index}>
              {stat.children}
            </CardDataStats>
          )) }
        </div>        
      </AdminLayout>
    </>
  );
};

export default DashboardPage;
