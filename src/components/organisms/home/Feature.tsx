import Image from "next/image";

export default function Feature() {
  const features = [
    {
      feature: "Pengaturan Suhu dan Kelembapan Kandang",
      description:
        "Pastikan suhu dan kelembapan kandang selalu optimal untuk kesehatan ayam dengan pengaturan otomatis dari PitEgg.",
      img: "suhu-kelembapan.webp",
    },
    {
      feature: "Pengurangan Gas Amonia",
      description:
        "Kurangi kadar gas amonia di kandang secara efektif dengan sistem blower otomatis dan penyemprotan zat pengurang amonia, menciptakan lingkungan yang lebih sehat untuk ayam.",
      img: "kurangi-gas.webp",
    },
    {
      feature: "Optimalisasi Biaya Listrik",
      description:
        "Hemat biaya listrik dengan otomatisasi alat kandang, membuat penggunaan energi lebih efisien dan mengurangi pengeluaran operasional.",
      img: "optimisasi-listrik.webp",
    },
    {
      feature: "Penyortiran Telur Otomatis",
      description:
        "Sortir telur secara otomatis dengan akurasi tinggi untuk memastikan kualitas terbaik dan meningkatkan efisiensi proses pemasaran.",
      img: "egg-filtering.webp",
    },
    {
      feature: "Otomatisasi Sistem IoT",
      description:
        "Atur perangkat IoT dengan mudah sesuai kebutuhan, mulai dari mode otomatis, semi-otomatis, hingga manual, untuk fleksibilitas pengelolaan kandang.",
      img: "otomatisasi-alat.webp",
    },
    {
      feature: "Pemantauan Kandang Jarak Jauh",
      description:
        "Pantau kondisi kandang secara real-time dari mana saja tanpa harus mengunjungi kandang, memastikan ayam selalu dalam kondisi terbaik.",
      img: "monitoring.webp",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6 xl:px-24">
        <h2 className="font-bold text-4xl text-white text-center mb-24">
          Di PitEgg kamu bisa...
        </h2>
        <div className="flex justify-center flex-wrap gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-compact bg-green-800 shadow-xl basis-75 transition-all duration-300 ease-out hover:scale-110"
            >
              <figure className="h-44">
                <Image
                  src={`/images/${feature.img}`}
                  alt={feature.feature}
                  width={400}
                  height={400}
                  className="size-full object-cover object-center"
                  loading="lazy"
                />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">{feature.feature}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
