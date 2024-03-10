import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Card() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="h-fit w-full grid grid-cols-6 gap-5">
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-1"></div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl col-span-4 col-start-3"></div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl  col-span-4 col-start-1"></div>
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-5"></div>
      </div>

      {/* <AnimatePresence>
        {selectedId && (
          <motion.div
            className="border-2 border-white rounded-md w-1/2 fixed top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-1/2 bg-slate-700 flex flex-col justify-center items-center p-10"
            initial={{
              opacity: 0,
              transform: "translate(-30%,-30%) scale(0.5)",
            }}
            animate={{ opacity: 1, transform: "translate(-50%,-50%) scale(1)" }}
            exit={{ opacity: 0, transform: "translate(-80%,-30%) scale(0.5)" }}
          >
            <motion.h5>{items.subtitle}</motion.h5>
            <motion.h2>{items.title}</motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-slate-800"
            >
              X
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}

export default Card;
