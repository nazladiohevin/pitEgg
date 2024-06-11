"use client";
import { ReactNode, useState } from "react";

interface ButtonGroupProps {
  items: string[];
}

const ButtonGroup = ({ items }: ButtonGroupProps) => {
  return (
    <div className="py-5">
      <ul className="rounded-lg overflow-hidden flex shadow-lg w-max font-semibold">
        {items.map((item, index) => (
          <li key={index} className="p-3 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
