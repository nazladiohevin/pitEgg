import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Benefit() {
  const benefits = [
    {
      description:
        "Mengurangi tingkat kematian ayam dan meningkatkan kualitas telur",
      icon: <Icon icon="iconoir:healthcare" className="text-white size-14" />,
    },
    {
      description: "Nutrisi yang tepat waktu dan tepat jumlah",
      icon: <Icon icon="akar-icons:check-box" className="text-white size-14" />,
    },
    {
      description: "Efisiensi energi",
      icon: (
        <Icon
          icon="hugeicons:sustainable-energy"
          className="text-white size-14"
        />
      ),
    },
    {
      description: "Menurunkan biaya operasional",
      icon: <Icon icon="uil:chart-down" className="text-white size-14" />,
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6 xl:px-24">
        <div className="gap-9 grid grid-cols-1 gap-y-30 md:grid-cols-2">
          <div className="h-54 flex items-center justify-center md:h-full md:justify-start bg-green-900/30 p-8 rounded-full">
            <Image
              src="/images/chicken-bro-magic.gif"
              alt=""
              width={100}
              height={100}
              className="object-cover object-center w-auto size-75 brightness-95 lg:w-4/5 lg:h-auto"
            />
          </div>
          <div className="text-green-900">
            <h2 className="font-bold text-4xl leading-snug">
              Kenapa harus memilih{" "}
              <span className="inline lg:block">PitEgg?</span>
            </h2>
            <div className="pl-1 ml-auto space-y-6 mt-10 md:pl-6 text-white">
              {benefits.map((benefit, index) => (
                <div
                  className="flex font-medium text-lg items-center w-full 2xl:w-4/5 gap-x-5 bg-green-700 rounded-xl p-3"
                  key={index}
                >
                  <div>{benefit.icon}</div>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
