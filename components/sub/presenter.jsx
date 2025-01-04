"use client";

import Image from "next/image";
import { headshot } from "@/assets/assets";
import { useState } from "react";

export default function Presenter() {
  const [present, setPresent] = useState(true);

  return (
    present && (
      <div className="fixed z-10 right-5 bottom-5">
        <div
          className="w-full text-right cursor-pointer"
          onClick={() => setPresent(false)}
        >
          X
        </div>
        <Image src={headshot} alt="presenting" className="w-24 rounded-lg" />
        <p className="w-fit text-primary bg-background opacity-80 px-2 rounded-full text-right -translate-y-7 translate-x-14">
          Hello
        </p>
      </div>
    )
  );
}
