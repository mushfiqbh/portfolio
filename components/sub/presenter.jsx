"use client";

import Image from "next/image";
import { headshot } from "@/assets/assets";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

export default function Presenter() {
  const [present, setPresent] = useState(true);

  return (
    present && (
      <div className="fixed z-10 right-5 bottom-5">
        <div
          className="w-full text-right cursor-pointer"
          onClick={() => setPresent(false)}
        >
          <IoCloseCircle className="text-2xl md:text-3xl text-primary bg-white rounded-full translate-x-20 md:translate-x-28 translate-y-5" />
        </div>
        <Image
          priority
          src={headshot}
          alt="presenting"
          className="w-24 md:w-32 rounded-lg"
        />
      </div>
    )
  );
}
