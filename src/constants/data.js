import { Icon } from "@iconify/react/dist/iconify.js";

const graphics = {
  time: {
    hours: {
      xAxisCategories: [
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
      ],
    },
    day: {
      dayIds: [
        { id: 1, name: "Senin" },
        { id: 2, name: "Selasa" },
        { id: 3, name: "Rabu" },
        { id: 4, name: "Kamis" },
        { id: 5, name: "Jumat" },
        { id: 6, name: "Sabtu" },
        { id: 7, name: "Minggu" },
      ],
      xAxisCategories: [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ],
    },
    week: {
      weekIds: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
        { id: 4, name: "4" },
      ],
      xAxisCategories: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
    },
    month: {
      monthIds: [
        { id: 1, name: "Januari" },
        { id: 2, name: "Februari" },
        { id: 3, name: "Maret" },
        { id: 4, name: "April" },
        { id: 5, name: "Mei" },
        { id: 6, name: "Juni" },
        { id: 7, name: "Juli" },
        { id: 8, name: "Agustus" },
        { id: 9, name: "September" },
        { id: 10, name: "Oktober" },
        { id: 11, name: "November" },
        { id: 12, name: "Desember" },
      ],
      xAxisCategories: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    },
    year: {
      xAxisCategories: ["2023", "2024"],
      yearIds: [
        { id: 2023, name: "2023" },
        { id: 2024, name: "2024" },
      ],
    },
  },
};

const dataStats = [
  {
    title: "Suhu",
    total: `0 °C`,
    rate: "2%",
    stability: "Suhu stabil: 20 - 24 °C",
    levelUp: false,
    levelDown: true,
    children: (
      <Icon icon="carbon:temperature-max" className="text-white size-7" />
    ),
  },
  {
    title: "Kelembapan Udara",
    total: "0 %",
    rate: "",
    stability: "Kelembapan stabil: 50 - 70 %",
    levelUp: false,
    levelDown: false,
    children: <Icon icon="carbon:humidity" className="text-white size-7" />,
  },
  {
    title: "Gas Amonia",
    total: "30 ppm",
    rate: "0.9%",
    stability: "Gas amonia stabil: 0 - 10 ppm",
    levelUp: true,
    levelDown: false,
    children: <Icon icon="iconoir:gas" className="text-white size-7" />,
  },
  {
    title: "Jumlah Telur",
    total: "56 butir telur",
    rate: "",
    stability: "",
    levelUp: false,
    levelDown: false,
    children: (
      <Icon icon="material-symbols:egg" className="text-white size-7" />
    ),
  },
];

export { graphics, dataStats };
