import { useState } from "react";

interface SwitcherProps {
  id: string;
}

const SwitcherThree = ({ id }: SwitcherProps) => {
  const [enabled, setEnabled] = useState(false);

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
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="block h-8 w-14 rounded-full bg-slate-400/50"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full text-white bg-red transition ${
              enabled
                ? "!right-1 !translate-x-full !bg-green-600"
                : "text-black"
            }`}
          >
            <span className={`hidden ${enabled && "!block"}`}>On</span>
            <span className={`${enabled && "hidden"}`}>Off</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherThree;
