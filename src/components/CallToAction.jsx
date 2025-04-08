import { motion } from "motion/react";
import React from "react";

export default function CallToAction() {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    hover: {
      scale: 1,
    },
  };
  const childVariant = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { ease: "easeOut" },
    },
  };
  return (
    <div className="grid grid-cols-8 p-4 gap-10 mb-20 overflow-x-hidden overflow-y-auto">
      <div className="flex items-center col-span-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        voluptatum reprehenderit veniam, nobis sapiente cupiditate, recusandae,
        labore aspernatur illo facere nulla corporis consectetur laudantium nam
        deserunt cum molestiae obcaecati.
      </div>
      <div className=" flex justify-end col-span-4">
        <img
          className="rounded-2xl  "
          src="https://placecats.com/300/200"
          alt=""
        />
      </div>
      <div className="flex mb-20 justify-end col-span-8 ">
        <div className="flex flex-col gap-10 ">
          {/* Framer Variant Method */}
          <motion.div
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <motion.button
              variants={childVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900 text-white py-4 px-20 rounded-full shadow-2xl shadow-blue-700"
            >
              Get Started
            </motion.button>
            <motion.button
              variants={childVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-900 text-white py-4 px-20 rounded-full shadow-2xl shadow-blue-700"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* You're Typical Method */}
          {/* <motion.button
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: "0.2" }}
            className="bg-blue-900 text-white py-4 px-20 rounded-full shadow-2xl shadow-blue-700"
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: "0.5" }}
            className="bg-blue-900 text-white py-4 px-20 rounded-full shadow-2xl shadow-blue-700"
          >
            Learn More
          </motion.button> */}
        </div>
      </div>
    </div>
  );
}
