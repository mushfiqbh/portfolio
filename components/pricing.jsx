"use client";

import { useState } from "react";
import Button from "@/UI/Button";
import Headline from "./sub/headline";
import { pricings } from "@/assets/assets";
import Link from "next/link";

export default function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div id="pricing">
      <Headline title="Pricing" subtitle="Order on Fiverr-Upwork-Linkedin" />
      <div className="px-5 md:px-0 w-full md:w-3/4 mx-auto flex items-center">
        {["Static", "Standard", "Premium"].map((label, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-1/3 h-20 flex items-center justify-center bg-gradient-box cursor-pointer ${
              selectedIndex === index ? "text-primary" : "hover:text-primary"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="w-full md:w-3/4 p-5 md:p-10 mx-auto bg-gradient-box shadow-shadow1">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-3xl text-primary">
                {pricings[selectedIndex].title}
              </h1>
              <p>{pricings[selectedIndex].framework}</p>
            </div>
            <Button type="button" variant="rect" className="cursor-default">
              ${pricings[selectedIndex].price}.00
            </Button>
          </div>
          <div>
            <p className="py-5">{pricings[selectedIndex].info}</p>
            <ul className="pr-7 min-h-52 grid grid-cols-3 justify-items-start content-start gap-3">
              {pricings[selectedIndex].features.map((feat, index) => (
                <li
                  key={index}
                  className="text-sm lg:text-lg h-fit p-3 rounded-lg bg-gradient-box shadow-shadow1"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <Link href="https://www.linkedin.com/in/mushfiqbh/" target="_blank">
            <div className="w-full text-xl text-center text-white p-5 rounded-lg bg-gradient-red hover:shadow-shadow1">
              ORDER NOW
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
