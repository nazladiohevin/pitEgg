import { Icon } from "@iconify/react/dist/iconify.js";
import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  stability: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  stability,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="relative rounded-lg px-7.5 py-6 shadow-4 shadow-slate-300 bg-white">
      <span
        className={`absolute top-3 right-4 size-3.5 rounded-full animate-ping duration-500 delay-150  ${
          levelDown && "bg-rose-500"
        }`}
      ></span>
      <span
        className={`absolute top-3 right-4 size-3.5 rounded-full ${
          levelDown && "bg-rose-500"
        }`}
      ></span>

      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-slate-500">
        {children}
      </div>

      <p className="mt-2 mb-3 text-xs font-medium">{stability}</p>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">{total}</h4>
          <span className="text-sm font-medium text-slate-600">{title}</span>
        </div>

        <span
          className={`flex items-end gap-1 text-sm font-medium ${
            levelUp && "text-green-500"
          } ${levelDown && "text-rose-500"} `}
        >
          {rate}
          {levelUp && (
            <Icon icon="lucide:chevrons-up" className="text-green-400 size-7" />
          )}
          {levelDown && (
            <Icon
              icon="lucide:chevrons-down"
              className="text-rose-500 size-7"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
