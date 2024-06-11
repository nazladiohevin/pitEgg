"use client";
import React from "react";
// import CardDataStats from "@/components/atoms/admin/CardDataStats";
import AdminLayout from "@/components/templates/AdminLayout";
import AreaChart from "@/components/atoms/admin/charts/AreaChart";

const MonitoringPage = () => {
  return (
    <>
      <AdminLayout>
        <div className="space-y-11">
          <div>
            <h1 className="text-4xl font-bold mb-1">Suhu</h1>
            <p className="italic text-sm mb-3">
              Geser pointer mouse anda di titik grafik untuk melihat nilai suhu
            </p>
            <AreaChart
              series={[
                {
                  name: "Suhu",
                  data: [
                    23, 11, 22, 27, 13, 22, 37, 21, 70, 22, 30, 45, 23, 11, 22,
                    27, 13, 22, 37, 21, 70, 22, 30, 45,
                  ],
                },
              ]}
              label={[
                {
                  name: "Nilai Suhu",
                  classNames: ["border-primary", "bg-primary", "text-primary"],
                },
              ]}
              xAxisCategories={[
                "00.00",
                "01.00",
                "02.00",
                "03.00",
                "04.00",
                "05.00",
                "06.00",
                "07.00",
                "08.00",
                "09.00",
                "10.00",
                "11.00",
                "12.00",
                "13.00",
                "14.00",
                "15.00",
                "16.00",
                "17.00",
                "18.00",
                "19.00",
                "20.00",
                "21.00",
                "22.00",
                "23.00",
              ]}
              yAxisCategories={{ min: 0, max: 100 }}
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default MonitoringPage;
