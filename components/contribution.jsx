"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Headline from "./sub/headline";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { contributions } from "@/assets/assets";

const Contribution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + contributions.length) % contributions.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contributions.length);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="contribution">
      <Headline title="Contributions" subtitle="My Open Source" />
      {/* Mobile View - Carousel */}
      <div className="w-full md:hidden flex flex-col items-center p-5 space-y-4">
        <motion.div
          className="w-full bg-gradient-box shadow-shadow1 rounded-lg p-6 space-y-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold">
            {contributions[currentIndex].repo}
          </h3>
          <p className="text-sm text-gray-600">
            {contributions[currentIndex].description}
          </p>
          <br />
          <Link
            href={contributions[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-md flex items-center justify-center gap-3 text-white p-2 rounded-lg bg-gradient-red hover:shadow-shadow1">
              <FaGithub />
              View on GitHub
            </div>
          </Link>
        </motion.div>
        <div className="flex justify-between items-center mt-2 w-full max-w-sm">
          <button onClick={handlePrev} className="p-2">
            <ChevronLeft />
          </button>
          <span className="text-sm">
            {currentIndex + 1} / {contributions.length}
          </span>
          <button onClick={handleNext} className="p-2">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:flex w-full md:w-3/4 mx-auto flex-wrap gap-5">
        {contributions.map((item, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gradient-box shadow-shadow1 rounded-lg space-y-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{item.repo}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <br />
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="text-md flex items-center justify-center gap-5 text-white p-2 rounded-lg bg-gradient-red hover:shadow-shadow1">
                  <FaGithub />
                  View on GitHub
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contribution;
