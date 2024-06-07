import { Icon } from "@iconify/react/dist/iconify.js";

export default function Benefit(){
  return (
    <section>
      <div className="container mx-auto px-6 xl:px-24">
        <div className="grid grid-cols-2 gap-9">
          <div className="text-white">
            <h2 className="font-bold text-4xl">Kenapa harus memilih <br /> Pitikku?</h2>
            <div className="pl-1 space-y-6 mt-10">
              <div className="flex items-center w-4/5 gap-x-2 bg-green-700 rounded-lg p-3">
                <div><Icon icon="mdi:asterisk-circle-outline" className="text-white size-14" /></div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center w-4/5 gap-x-2 bg-green-700 rounded-lg p-3">
                <div><Icon icon="mdi:asterisk-circle-outline" className="text-white size-14" /></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex items-center w-4/5 gap-x-2 bg-green-700 rounded-lg p-3">
                <div><Icon icon="mdi:asterisk-circle-outline" className="text-white size-14" /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto!</p>
              </div>
            </div>
          </div>          
          <div className="flex justify-center items-center">
            <div className="size-96 rounded-full overflow-hidden">
              <img src="./images/image-1.jpg" alt="" className="size-full object-cover object-center7" />
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}