import React from "react";
import Link from "next/link";
import Headline from "./sub/headline";
import { FaGithub } from "react-icons/fa";
import { contributions } from "@/assets/assets";

const Contribution = () => {
  return (
    <div id="contribution">
      <Headline title="Contributions" subtitle="My Open Source Contributions" />
      <div className="w-full md:w-3/4 mx-auto flex flex-wrap gap-5">
        {contributions.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gradient-box shadow-shadow1 rounded-lg space-y-4"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribution;
