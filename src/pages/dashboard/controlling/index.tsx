import Switcher from "@/components/atoms/admin/Switcher";
import ButtonGroup from "@/components/molecules/admin/ButtonGroup";
import AdminLayout from "@/components/templates/AdminLayout";
import useGetRealtimeValue from "@/hooks/db/useGetRealtimeValue";
import Head from "next/head";
import { useEffect, useState } from "react";

// Define types
interface ComponentControl {
  id: string;
  control: boolean;
}

interface FanControl {
  id: string;
  fanControl: boolean;
  sprinkleControl: boolean;
}

interface Controlles {
  lamp: ComponentControl[];
  fan: FanControl[];
  amoniaPump: ComponentControl[];
}

const ControllingPage = () => {
  // const baseIotPath = "user/1/iot/component/1";
  const baseComponentPath = "user/1/iot/component";
  const {
    data: components,
    error: componentError,
    loading: componentLoading,
  } = useGetRealtimeValue(baseComponentPath);

  const [controlles, setControlles] = useState<Controlles>({
    lamp: [],
    fan: [],
    amoniaPump: [],
  });

  useEffect(() => {
    if (components) {
      let newControlles: Controlles = {
        lamp: [],
        fan: [],
        amoniaPump: [],
      };

      Object.entries(components).forEach(
        ([key, component]: [string, any], index) => {
          newControlles.lamp.push({
            id: (index + 1).toString(),
            control: component.temperature?.control || false,
          });

          newControlles.fan.push({
            id: key,
            fanControl: component.gas?.fanControl || false,
            sprinkleControl: component.gas?.sprinkleControl || false,
          });

          newControlles.amoniaPump.push({
            id: key,
            control: component.gas?.sprinkleControl || false,
          });
        }
      );

      setControlles(newControlles);
    }
  }, [components]);

  return (
    <AdminLayout>
      <Head>
        <title>Dashboard Kontrol Alat - Partner - PitEgg</title>
      </Head>
      {componentLoading ? (
        <div className="flex flex-col h-full justify-center items-center">
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <p className="font-bold text-lg mt-3">Tunggu sebentar</p>
        </div>
      ) : (
        <>
          <h4 className="font-bold text-4xl mb-1">Kontrol Alat IoT</h4>
          <small>Arahkan </small>
          <ButtonGroup items={["Lampu", "Kipas"]} />
          <div className="mt-15">
            <h4 className="font-bold text-2xl text-slate-600">Lampu</h4>
            <div className="mt-5 flex text-slate-600 flex-wrap gap-5 ml-5">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Komponen</p>
                <p className="text-lg font-semibold">Kontrol</p>
              </div>
              <div className="flex flex-wrap gap-5">
                {controlles.lamp.map((item, index) => (
                  <div className="space-y-2" key={index}>
                    <span className="block font-bold text-center">{`${item.id}`}</span>
                    <Switcher
                      id={`lampu${item.id}`}
                      isOn={item.control}
                      path={`${baseComponentPath}/${item.id}/temperature/control`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-15">
            <h4 className="font-bold text-2xl text-slate-600">Fan</h4>
            <div className="mt-5 flex text-slate-600 flex-wrap gap-5 ml-5">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Komponen</p>
                <p className="text-lg font-semibold">Kontrol</p>
              </div>
              <div className="flex flex-wrap gap-5">
                {controlles.fan.map((item, index) => (
                  <div className="space-y-2" key={index}>
                    <span className="block font-bold text-center">{`${item.id}`}</span>
                    <Switcher
                      id={`fan${item.id}`}
                      isOn={item.fanControl}
                      path={`${baseComponentPath}/${item.id}/gas/fanControl`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="mt-15">
            <h4 className="font-bold text-2xl text-slate-600">Amonia Pump</h4>
            <div className="mt-5 flex flex-wrap gap-5">
              {controlles.amoniaPump.map((item, index) => (
                <div className="space-y-2" key={index}>
                  <span className="block font-bold text-center">{`${item.id}`}</span>
                  <Switcher
                    id={`amoniapump${item.id}`}
                    isOn={item.control}
                    path={`${baseComponentPath}/${item.id}/gas/sprinkleControl`}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </>
      )}
    </AdminLayout>
  );
};

export default ControllingPage;
