"use client";
import { ReactNode, useState } from "react";

interface ButtonGroupProps {
  items: string[];
}

const ButtonGroup = ({ items }: ButtonGroupProps) => {
  return (
    <div className="py-5">
      <div className="p-2 w-max rounded-lg overflow-hidden shadow-lg border-2 border-slate-400/60">
        <ul className="flex font-semibold">
          {items.map((item, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer transition-all text-center hover:bg-slate-300 ${
                index + 1 == items.length ? "" : "border-r-2 border-slate-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonGroup;
