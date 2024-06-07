import Link from "next/link";

export default function JumbotronHome (){
  return (
    <header>
      <div className="relative h-[92vh] overflow-hidden">
        <img src="./images/big-banner-farm.jpg" alt="" className="size-full object-cover object-center" />    
        <div className="absolute top-0 left-0 size-full bg-green-900/50 z-10">
          <div className="flex flex-col text-white px-16 pt-32">
            <h1 className="font-bold text-6xl">Tingkatkan Produktivitas <br /> Ayam Petelurmu!</h1>
            <p className="font-medium text-lg leading-snug mt-6 pr-[50%] opacity-85">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ducimus. Porro, neque molestias, id, facilis ipsum veritatis natus explicabo maiores numquam architecto eos rem blanditiis perspiciatis placeat eveniet asperiores aspernatur nesciunt commodi sit. Accusantium, voluptate.
            </p>
            <div className="mt-8">
              <Link href="/auth/register" className="btn btn-lg bg-amber-600 border-0 hover:bg-amber-600 text-white font-semibold">Gabung Sekarang</Link>
            </div>
          </div>
        </div>                    
      </div>
    </header>
  );
}