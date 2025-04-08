import { motion } from "motion/react";
import React from "react";

export default function HeroSection() {
  const parentVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };
  const childVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };
  return (
    <motion.section
      variants={parentVariant}
      initial="hidden"
      exit="exit"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="sm:mt-20 max-w-screen min-h-screen-xl mx-auto py-[8rem] flex flex-col gap-10 items-center"
    >
      <motion.div variants={childVariant} className="flex justify-center">
        <h1 className="text-2xl sm:text-6xl md:text-8xl">
          Build With Confidence
        </h1>
      </motion.div>
      <motion.div variants={childVariant} className="text-lg md:text-2xl">
        Level up youre animation with Framer Motion. Smooth. Easy. Powerful.
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        variants={childVariant}
        className="bg-blue-900 px-4 py-2 rounded-full text-white"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
}
