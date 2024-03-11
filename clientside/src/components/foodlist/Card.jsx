import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideBox } from "lucide-react";

function Card() {
  const food = {
    recipe: [
      {
        name: "chicken",
        ingredients: [
          {
            name: "chicken",
            amount: 2,
            unit: "kg",
          },
          {
            name: "onion",
            amount: 1,
            unit: "kg",
          },
        ],
        steps: [
          {
            step: "cut the chicken",
            time: 10,
          },
          {
            step: "cut the onion",
            time: 5,
          },
        ],
      },
    ],
  };
  const cardvariants = {
    hidden: { opacity: 0, scale: 0.5, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  };
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  return (
    <>
      <motion.div
        className="  h-full 2xl:grid 2xl:gap-y-[3vh] 2xl:gap-x-[5vh]  2xl:grid-cols-3 flex gap-[2vh]"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <motion.div
          className=" bg-[#ffffffcc] 2xl:col-span-2 xl:flex-1  rounded-[1.5rem]"
          initial="hidden"
          animate="visible"
          variants={cardvariants}
        ></motion.div>
        <motion.div
          className=" bg-[#fff6b9] xl:flex-1 rounded-[1.5rem] "
          initial="hidden"
          animate="visible"
          variants={cardvariants}
        ></motion.div>
        <motion.div
          className=" bg-[#fff6b9] xl:flex-1 rounded-[1.5rem]"
          initial="hidden"
          animate="visible"
          variants={cardvariants}
        ></motion.div>
        <motion.div
          className=" bg-[#ffffffcc] xl:flex-1 2xl:col-span-2  rounded-[1.5rem]"
          initial="hidden"
          animate="visible"
          variants={cardvariants}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default Card;
