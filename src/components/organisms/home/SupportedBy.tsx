import Image from "next/image";

export default function SupportedBy() {
  return (
    <section className="mb-48 container mx-auto px-6 xl:px-24">
      <h2 className="text-4xl font-bold text-green-900 text-center">
        Didukung oleh
      </h2>
      <div className="mt-11 grid grid-cols-1 md:grid-cols-4 gap-5 place-content-center">
        <div className="p-2 rounded-lg">
          <Image
            src="/images/amcc.svg"
            alt="AMCC Logo"
            width={400}
            height={100}
            className="size-full"
          />
        </div>
        <div className="bg-white p-2 rounded-lg">
          <Image
            src="/images/amikom.svg"
            alt="AMIKOM Logo"
            width={400}
            height={100}
            className="size-full"
          />
        </div>
      </div>
    </section>
  );
}
