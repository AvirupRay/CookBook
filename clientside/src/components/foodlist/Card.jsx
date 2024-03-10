import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Card() {
  return (
    <>
      <div className="h-full w-fit grid grid-cols-6 gap-5">
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-1"></div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl col-span-4 col-start-3"></div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl  col-span-4 col-start-1"></div>
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-5"></div>
      </div>
    </>
  );
}

export default Card;
