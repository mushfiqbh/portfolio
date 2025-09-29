"use client"

import HLine from "./ui/separator";
import Headline from "./sub/headline";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Resume() {
  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for section headers
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for column containers
  const columnVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <div id="resume" className="px-4 sm:px-6 lg:px-0">
      <Headline title="My Resume" subtitle="1+ years of experiences" />

      <motion.div
        className="w-full md:w-3/4 mx-auto md:flex gap-10 mt-8 md:mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Education Column */}
        <motion.div className="w-full md:w-1/2 space-y-6 md:space-y-10" variants={columnVariants}>
          <motion.h2
            className="h-20 text-2xl text-primary font-bold flex items-center justify-center bg-gradient-box rounded-lg shadow-shadow1"
            variants={headerVariants}
            whileHover={{ scale: 1.05 }}
          >
            Educational Quality
          </motion.h2>

          <motion.div
            className="min-h-80 p-10 bg-gradient-box rounded-lg shadow-shadow1"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="w-full flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h1
                  className="text-2xl font-bold md:text-3xl mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Computer Science & Engineering
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Leading University (2023 - Present)
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Button text="small" className="text-primary">
                  3.8
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <HLine className="w-full my-5 md:my-7" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              viewport={{ once: true }}
            >
              I have been learning Data Structures and Algorithm, System design,
              competitive programming etc.
            </motion.div>
          </motion.div>

          <motion.div
            className="min-h-80 p-10 bg-gradient-box rounded-lg shadow-shadow1"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="w-full flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h1
                  className="text-2xl font-bold md:text-3xl mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  A Level HSC Certificate
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  BAF Shaheen College, Shamshernagar (2019 - 2022)
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Button text="small" className="text-primary">
                  5.0
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <HLine className="w-full my-5 md:my-7" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              viewport={{ once: true }}
            >
              I learned things in science background. Also worked in extra
              curricular activities.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience Column */}
        <motion.div
          className="w-full md:w-1/2 mt-16 md:mt-0 space-y-6 md:space-y-10"
          variants={columnVariants}
        >
          <motion.h2
            className="h-20 text-2xl text-primary font-bold flex items-center justify-center bg-gradient-box rounded-lg shadow-shadow1"
            variants={headerVariants}
            whileHover={{ scale: 1.05 }}
          >
            Job Experiences
          </motion.h2>

          <motion.div
            className="min-h-80 p-10 bg-gradient-box rounded-lg shadow-shadow1"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="w-full flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h1
                  className="text-2xl font-bold md:text-3xl mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Part-time Laravel Web Developer
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  MS3 Technology BD (Present)
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Button text="small" className="text-primary">
                  1Yr
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <HLine className="w-full my-5 md:my-7" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              viewport={{ once: true }}
            >
              Working on full-stack commercial web development and achieving new experiences with modern projects
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
