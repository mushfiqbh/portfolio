"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Clock, TrendingUp, Code } from "lucide-react";
import Headline from "./sub/headline";
import { caseStudies } from "@/assets/assets";

const CaseStudy = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (id) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="case-studies"
      className="px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="w-full md:w-3/4 mx-auto">
        {/* Header */}
        <Headline
          title="Case Studies"
          subtitle="Applications of my skills"
        />

        {/* Case Study Cards */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            const isExpanded = expandedCards.includes(study.id);

            return (
              <motion.div
                key={study.id}
                variants={cardVariants}
                className="bg-gradient-box shadow-shadow1 rounded-2xl hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Card Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCard(study.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${study.color}`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          {study.category}
                        </span>
                        <h3 className="text-lg text-heading mt-1">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-body" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate={isExpanded ? "visible" : "hidden"}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-6">
                    {/* Background */}
                    <div className="bg-foreground rounded-lg p-4">
                      <h4 className="font-semibold text-heading mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        Background
                      </h4>
                      <p className="text-body">{study.background}</p>
                    </div>

                    {/* Challenge */}
                    <div className="bg-foreground rounded-lg p-4 border-l-4 border-pink">
                      <h4 className="font-semibold text-heading mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-pink" />
                        Challenge
                      </h4>
                      <p className="text-body">{study.challenge}</p>
                    </div>

                    {/* Actions Taken */}
                    <div className="bg-foreground rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-semibold text-heading mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-primary" />
                        Actions Taken
                      </h4>
                      <ul className="space-y-2">
                        {study.actions.map((action, index) => (
                          <li
                            key={index}
                            className="flex items-start text-body"
                          >
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-foreground rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-semibold text-heading mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-start text-body"
                          >
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-foreground rounded-lg p-4 text-center border border-primary/20"
                        >
                          <div className="text-2xl font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-sm text-body capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-heading mb-3">
                        Technologies & Skills Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${study.color} text-white`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
