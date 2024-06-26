"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/atoms/admin/CardDataStats";
import AdminLayout from "@/components/templates/AdminLayout";
import { dataStats } from "@/constants/data";
import useGetRealtimeValue from "@/hooks/db/useGetRealtimeValue";
import calculatePercentRealtimData from "@/utils/calculatePercentRealtimeData";
import getEstimatedElectricityCosts from "@/utils/getEstimatedElectricityCosts";
import formatToRupiah from "@/utils/formatToRupiah";
import formatToNumber from "@/utils/formatNumber";
import Head from "next/head";

const DashboardPage = () => {
  const baseIotPath = "user/1/iot/component/1";
  const {
    data: temperature,
    error: temperatureError,
    loading: temperatureLoading,
  } = useGetRealtimeValue(`${baseIotPath}/temperature`);
  const {
    data: humidity,
    error: humidityError,
    loading: humidityLoading,
  } = useGetRealtimeValue(`${baseIotPath}/humidity`);
  const {
    data: gas,
    error: gasError,
    loading: gasLoading,
  } = useGetRealtimeValue(`${baseIotPath}/gas`);
  const {
    data: electricity,
    error: electricityError,
    loading: electricityLoading,
  } = useGetRealtimeValue(`user/1/electricity`);

  const [electric, setElectric] = useState(electricity);
  const [estimatedElectricityCost, setEstimatedElectricityCost] =
    useState<number>(0);

  const [stats, setStats] = useState(dataStats);

  const updateStat = (
    title: string,
    value: string,
    range?: { topRange: number; bottomRange: number }
  ) => {
    // Nilai default jika range tidak diberikan
    const defaultRange = { topRange: 0, bottomRange: 0 };

    setStats((prevStats) =>
      prevStats.map((stat) => {
        const percentage = calculatePercentRealtimData(
          parseInt(value),
          range || defaultRange
        );

        return stat.title === title
          ? {
              ...stat,
              total: value,
              rate: `${
                percentage.percent != 0
                  ? percentage.percent.toFixed(0) + "%"
                  : ""
              }`,
              levelDown: percentage.status === "down" ? true : false,
              levelUp: percentage.status === "up" ? true : false,
            }
          : stat;
      })
    );
  };

  // Data Change
  useEffect(() => {
    if (temperature) {
      updateStat("Suhu", `${temperature.value} °C`, {
        topRange: 24,
        bottomRange: 20,
      });
    }
    if (humidity) {
      updateStat("Kelembapan Udara", `${humidity.value} %`, {
        topRange: 70,
        bottomRange: 50,
      });
    }
    if (gas) {
      updateStat("Gas Amonia", `${gas.value} ppm`, {
        topRange: 10,
        bottomRange: 0,
      });
    }
    if (electricity) {
      setElectric(electricity);
      setEstimatedElectricityCost(
        getEstimatedElectricityCosts(electricity.value)
      );
    }
  }, [temperature, humidity, gas, electricity]);

  // Error handle
  useEffect(() => {
    if (temperatureError) {
      updateStat("Suhu", `No Connection`);
    }
    if (humidityError) {
      updateStat("Kelembapan Udara", `No Connection`);
    }
    if (gasError) {
      updateStat("Gas Amonia", `No Connection`);
      setElectric({ error: true });
    }
  }, [temperatureError, humidityError, gasError, electricityError]);

  return (
    <>
      <Head>
        <title>Dashboard - Partner - PitEgg</title>
      </Head>
      <AdminLayout>
        <h4 className="font-bold text-4xl mb-1">Data perHari</h4>
        {/* <small className="block font-medium italic mb-6">
          Klik untuk detail lebih lanjut
        </small> */}
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
                {electric ? formatToNumber(electric.value) : 0} kWh
                <span className="text-base no-underline font-normal">
                  /bulan
                </span>
              </p>
            </div>
          </div>
          <div className="pt-6 pb-22 px-9 w-full shadow-slate-300 bg-white rounded-lg shadow-lg">
            <h4 className="font-extrabold text-2xl">Estimasi Bayar Listrik</h4>
            <div className="mt-24 text-center">
              <p className="text-slate-700 font-extrabold text-5xl md:text-6xl">
                <span>
                  {formatToRupiah(
                    parseInt(estimatedElectricityCost.toFixed(3))
                  )}
                </span>
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
