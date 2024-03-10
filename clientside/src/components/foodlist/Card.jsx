import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Card() {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { subtitle: "Subtitle 1", title: "Title 1", id: "1" },
    { subtitle: "Subtitle 2", title: "Title 2", id: "2" },
    { subtitle: "Subtitle 3", title: "Title 3", id: "3" },
    { subtitle: "Subtitle 4", title: "Title 4", id: "4" },
    { subtitle: "Subtitle 5", title: "Title 5", id: "5" },
    { subtitle: "Subtitle 6", title: "Title 6", id: "6" },
  ];

  return (
    <>
      <div
        className={`h-fit w-full grid grid-cols-3 px-32 pt-16 justify-center items-center gap-10 overflow-x-hidden scrollbar-hide ${
          selectedId
            ? "blur-sm pointer-events-none overflow-hidden"
            : "blur-0 pointer-events-auto"
        }`}
      >
        {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
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
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
