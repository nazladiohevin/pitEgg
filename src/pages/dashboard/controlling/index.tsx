import SwitcherThree from "@/components/atoms/admin/SwitcherThree";
import ButtonGroup from "@/components/molecules/admin/ButtonGroup";
import AdminLayout from "@/components/templates/AdminLayout";

const ControllingPage = () => {
  const controlles = {
    lampu: [{ id: "1" }, { id: "2" }, { id: "3" }],
    fan: [{ id: "1" }, { id: "2" }, { id: "3" }],
    amoniaPump: [{ id: "1" }, { id: "2" }, { id: "3" }],
  };

  return (
    <AdminLayout>
      <ButtonGroup items={["Lampu", "Kipas", "Amonia Pump"]} />
      <div className="mt-15">
        <h4 className="font-extrabold text-3xl text-slate-600">Lampu</h4>
        <div className="mt-5 flex flex-wrap gap-5">
          {controlles.lampu.map((item, index) => (
            <div className="space-y-2" key={index}>
              <span className="block font-semibold ">{`Lampu ${item.id}`}</span>
              <SwitcherThree id={`lampu${item.id}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-15">
        <h4 className="font-extrabold text-3xl text-slate-600">Fan</h4>
        <div className="mt-5 flex flex-wrap gap-5">
          {controlles.fan.map((item, index) => (
            <div className="space-y-2" key={index}>
              <span className="block font-semibold ">{`Fan ${item.id}`}</span>
              <SwitcherThree id={`fan${item.id}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-15">
        <h4 className="font-extrabold text-3xl text-slate-600">Amonia Pump</h4>
        <div className="mt-5 flex flex-wrap gap-5">
          {controlles.lampu.map((item, index) => (
            <div className="space-y-2" key={index}>
              <span className="block font-semibold ">{`Amonia pump ${item.id}`}</span>
              <SwitcherThree id={`amoniapump${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ControllingPage;
