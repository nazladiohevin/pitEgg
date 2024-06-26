import useSetRealtimeValue from "@/hooks/db/useSetRealtimeValue";
import { useEffect, useState } from "react";

interface SwitcherProps {
  id: string;
  isOn: boolean;
  path: string;
}

const Switcher = ({ id, isOn, path }: SwitcherProps) => {
  const [enabled, setEnabled] = useState(isOn);

  const setRealtimeValue = useSetRealtimeValue(path);

  useEffect(() => {
    setEnabled(isOn);
  }, [isOn]);

  const handleChange = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    setRealtimeValue(newEnabled);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            onChange={handleChange}
          />
          <div className="block h-8 w-14 rounded-full bg-slate-300"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full text-white bg-red transition ${
              enabled
                ? "!right-1 !translate-x-full !bg-green-500"
                : "text-black"
            }`}
          >
            <span
              className={`text-xs font-semibold hidden ${enabled && "!block"}`}
            >
              On
            </span>
            <span className={`text-xs font-semibold ${enabled && "hidden"}`}>
              Off
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
