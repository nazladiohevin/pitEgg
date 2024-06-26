import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useGetRealtimeValue from "@/hooks/db/useGetRealtimeValue";
import Select from "../../Select";
import { graphics } from "@/constants/data";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface AreaChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

interface AreaChartProp {
  // series: {
  //   name: string;
  //   data: number[];
  // }[];
  // label: {
  //   name: string;
  //   classNames: string[];
  // }[];
  // xAxisCategories: string[];
  // yAxisCategories: {
  //   min: number;
  //   max: number;
  // };
  iotPath: string;
}

const basePath = "user/1/recap";

const AreaChart = ({ iotPath }: AreaChartProp) => {
  const [state, setState] = useState<AreaChartState>({
    series: [
      {
        name: "Suhu",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 70, 22, 30, 45],
      },
    ],
  });
  const [activeTimeUnit, setActiveTimeUnit] = useState<string>("Month");
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<number>(1);
  const [week, setWeek] = useState<number>(1);
  const [day, setDay] = useState<number>(1);

  useEffect(() => {
    console.log(year, month, week, day);
  }, [year, month, week, day]);

  // useGetRealtimeValue(`${basePath}/${iotPath}`);

  const yAxisCategories = { min: 0, max: 100 };
  const timeUnits = [
    { id: 1, name: "Hours" },
    { id: 2, name: "Day" },
    { id: 3, name: "Week" },
    { id: 4, name: "Month" },
  ];
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [3, 7],
      curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      labels: {
        show: true,
        style: {
          cssClass: "text-blue-500",
        },
      },
      categories: graphics.time.month.xAxisCategories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: yAxisCategories.min,
      max: yAxisCategories.max,
    },
  };

  // Handle action
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  // handleReset;

  const handleChangeTimeUnit = (activeTimeUnit: string) => {
    setActiveTimeUnit(activeTimeUnit);
  };
  const handleChangeYear = (event: any) => {
    setYear(event.target.value);
  };
  const handleChangeMonth = (event: any) => {
    setMonth(event.target.value);
  };
  const handleChangeWeek = (event: any) => {
    setWeek(event.target.value);
  };
  const handleChangeDay = (event: any) => {
    setDay(event.target.value);
  };

  return (
    <div className="transition-all rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default  sm:px-7.5">
      {/* Year Select */}
      <div className="mb-7 flex w-full justify-start gap-5">
        <div className="w-full flex justify-start items-center gap-5">
          <label htmlFor="">Tahun</label>
          <select
            className="select select-bordered select-sm w-full max-w-35"
            onChange={handleChangeYear}
          >
            <option disabled selected>
              Pilih tahun
            </option>
            {graphics.time.year.yearIds.map((year) => (
              <option key={year.id}>{year.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* TimeUnit */}
      <div className="flex justify-start ml-10">
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5">
            {timeUnits.map((timeUnit) => (
              <button
                key={timeUnit.id}
                className={`rounded px-3 py-1 text-xs font-medium shadow-card transition-all ease-out ${
                  activeTimeUnit == timeUnit.name
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black hover:bg-blue-200"
                }`}
                onClick={() => handleChangeTimeUnit(timeUnit.name)}
              >
                {timeUnit.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time */}
      <div className="my-10 flex justify-start items-end gap-x-5">
        {["Week", "Day", "Hours"].includes(activeTimeUnit) && (
          <Select
            label="Bulan"
            defaultValue="Pilih bulan"
            values={graphics.time.month.monthIds}
            onChangeValue={handleChangeMonth}
          />
        )}
        {["Day", "Hours"].includes(activeTimeUnit) && (
          <Select
            label="Minggu ke-"
            defaultValue="Pilih minggu"
            values={graphics.time.week.weekIds}
            onChangeValue={handleChangeWeek}
          />
        )}
        {["Hours"].includes(activeTimeUnit) && (
          <Select
            label="Hari"
            defaultValue="Pilih hari"
            values={graphics.time.day.dayIds}
            onChangeValue={handleChangeDay}
          />
        )}
      </div>

      <div>
        <div id="areaCshart" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
