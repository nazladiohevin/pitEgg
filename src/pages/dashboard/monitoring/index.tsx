"use client";
import React from "react";
// import CardDataStats from "@/components/atoms/admin/CardDataStats";
import AdminLayout from "@/components/templates/AdminLayout";
import AreaChart from "@/components/atoms/admin/charts/AreaChart";
import Head from "next/head";
import { graphics } from "@/constants/data";

const MonitoringPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard Monitoring - Partner - PitEgg</title>
      </Head>
      <AdminLayout>
        <div className="space-y-11">
          <div>
            <h1 className="text-4xl font-bold mb-1">Suhu</h1>
            <p className="italic text-sm mb-3">
              Geser pointer mouse anda di titik grafik untuk melihat nilai suhu
            </p>
            <AreaChart iotPath="/temperature" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-1">Kelembapan</h1>
            <p className="italic text-sm mb-3">
              Geser pointer mouse anda di titik grafik untuk melihat nilai suhu
            </p>
            <AreaChart iotPath="/humadity" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-1">Kandungan Gas Amonia</h1>
            <p className="italic text-sm mb-3">
              Geser pointer mouse anda di titik grafik untuk melihat nilai suhu
            </p>
            <AreaChart iotPath="/gas" />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default MonitoringPage;
