import Image from "next/image";
import Link from "next/link";

export default function JumbotronHome() {
  return (
    <header>
      <div className="relative h-screen min-h-[750px] overflow-hidden">
        <Image
          src="/images/big-banner-farm.jpg"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
          }}
          sizes="100vw"
          alt="Banner"
          className="size-full object-cover object-right md:object-center"
        />
        <div className="absolute top-0 left-0 size-full z-10">
          <div className="flex size-full flex-col items-center justify-center text-white px-8 md:px-16">
            <h1 className="font-bold text-center text-4xl lg:text-6xl">
              Tingkatkan Produktivitas <br /> Ayam Petelurmu!
            </h1>
            <p className="font-medium text-base text-center opacity-85 leading-snug mt-6 lg:px-49 lg:text-lg">
              Produktivitas ayam petelur menurun dan biaya listrik membengkak?
              Gunakan PitEgg! Perangkat IoT ini meningkatkan produksi telur,
              memudahkan manajemen kandang, dan menghemat listrik. PitEgg siap
              mendukung kesuksesan bisnis peternakan Anda. Bergabunglah
              sekarang!
            </p>
            <div className="mt-8">
              <Link
                href="/auth/register"
                className="btn btn-lg bg-amber-600 border-0 text-white font-semibold leading-6 transition-all hover:scale-110 hover:bg-amber-600"
              >
                Gabung Sekarang Juga
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
