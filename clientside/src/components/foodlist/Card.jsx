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
  return (
    <>
      <div className="h-full w-fit grid grid-cols-6 gap-5">
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-1 font-WorkSans">
          <div className="w-[100%] h-[20%] px-[5%] flex items-center text-[3.2vh] font-semibold text-[black] bg-[#26262244] rounded-b-3xl">
            {food.recipe[0].name}
          </div>
          <div className="  text-[black] font-medium h-[80%] mx-[3%] py-[2%]">
            {food.recipe[0].ingredients.map((ingredient) => {
              return (
                <div className="flex items-center justify-between">
                  <div className="text-[2.5vh] flex gap-[2%] w-full">
                    <LucideBox size={20} />
                    {ingredient.name} {ingredient.amount} {ingredient.unit}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl col-span-4 col-start-3"></div>
        <div className="bg-[#262622] w-[60vw] h-[35vh] rounded-3xl  col-span-4 col-start-1"></div>
        <div className="bg-[#F4E896] w-[30vw] h-[35vh] rounded-3xl col-span-2 col-start-5"></div>
      </div>
    </>
  );
}

export default Card;
