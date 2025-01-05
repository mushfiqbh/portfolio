"use client";

import { useState } from "react";
import Button from "@/UI/Button";
import Headline from "./sub/headline";
import { pricings } from "@/assets/assets";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="pricing">
      <Headline title="Pricing" subtitle="Order to My Agency" />
      <div className="px-0 w-full md:w-3/4 mx-auto flex items-center">
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
            <Button type="button" variant="rect" text="small" className="cursor-default">
              Starting ${pricings[selectedIndex].price}.0
            </Button>
          </div>
          <div>
            <p className="py-5">{pricings[selectedIndex].info}</p>
            <ul className="mb-5 min-h-52 flex content-start flex-wrap gap-3 ">
              {pricings[selectedIndex].features.map((feat, index) => (
                <li
                  key={index}
                  className="text-sm lg:text-lg h-fit p-3 rounded-lg bg-gradient-box shadow-shadow1 hover:text-primary"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <Link href="https://www.linkedin.com/in/mushfiqbh/" target="_blank">
            <div className="w-full text-xl flex items-center justify-center gap-5 text-white p-5 rounded-lg bg-gradient-red hover:shadow-shadow1">
              <FaLinkedin />
              ORDER NOW
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
