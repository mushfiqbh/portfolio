import React from "react";
import Link from "next/link";
import Image from "next/image";
import Headline from "./sub/headline";
import { certificates } from "@/assets/assets";

const Achievement = () => {
  return (
    <div id="achievement">
      <Headline title="Achievements" subtitle="Certifications & Awards" />
      <div className="flex flex-wrap justify-center gap-6 w-full p-5">
        {certificates.map((cert, idx) => (
          <Link
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-72 p-5 bg-gradient-box shadow-shadow1 rounded-2xl transition-transform hover:scale-105 hover:text-primary"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
