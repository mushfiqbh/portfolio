"use client";

import Image from "next/image";
import { reviews } from "@/assets/assets";
import Headline from "./sub/headline";
import Button from "@/UI/Button";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Testimonial() {
  const [client, setClient] = useState(reviews[0]);

  return (
    <div id="testimonial">
      <Headline title="Testimonial" subtitle="What Clients Say" />
      <div className="w-full lg:w-3/4 mx-auto lg:flex gap-10">
        <div className="lg:w-1/3 px-7 pt-7 lg:py-7 bg-gradient-box lg:shadow-shadow1 rounded-lg">
          <Image
            src={client.pic}
            alt="client pic"
            className="w-1/2 h-48 md:h-60 lg:w-full rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold pt-4">{client.name}</h3>
          <p className="text-slate-500 py-2">{client.rule}</p>
        </div>
        <div className="lg:w-2/3 -translate-y-12">
          <div className="flex justify-end gap-3 bg-transparent translate-y-5 pr-5 lg:pb-16">
            <Button
              type="button"
              variant="round"
              onClick={() =>
                setClient(
                  (client) => reviews[client.id === 0 ? 2 : client.id - 1]
                )
              }
            >
              <GrPrevious />
            </Button>
            <Button
              type="button"
              variant="round"
              onClick={() =>
                setClient((client) => reviews[(client.id + 1) % 3])
              }
            >
              <GrNext />
            </Button>
          </div>
          <div className="lg:translate-y-12 px-7 lg:px-10 py-10 lg:py-14 bg-gradient-box shadow-shadow1 rounded-lg">
            <h2 className="text-3xl">{client.project}</h2>
            <p>{client.info}</p>
            <hr className="my-4" />
            <p className="text-slate-700 dark:text-slate-200">
              {client.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
