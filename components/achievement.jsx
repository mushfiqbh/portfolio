"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Headline from "./sub/headline";
import { certificates } from "@/assets/assets";

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <div id="achievement">
      <Headline title="Achievements" subtitle="Certifications & Awards" />

      <div className="flex flex-col items-center w-full p-5 md:hidden">
        <Link
          href={certificates[currentIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-5 bg-gradient-box shadow-shadow1 rounded-2xl transition-transform hover:scale-105 hover:text-primary"
        >
          <Image
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].title}
            className="w-full h-40 object-contain mb-4 rounded"
          />
          <h3 className="text-lg font-semibold text-center">
            {certificates[currentIndex].title}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-4 w-full max-w-sm">
          <button onClick={handlePrev} className="p-2">
            <ChevronLeft />
          </button>
          <span className="text-sm">
            {currentIndex + 1} / {certificates.length}
          </span>
          <button onClick={handleNext} className="p-2">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Desktop grid view */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 w-full p-5">
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
