import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesIcon, Trash2Icon, X } from "lucide-react";
function Foodlist() {
  const [foods, setFoods] = useState([]);
  const [item, setItem] = useState("");
  const [showIngredients, setShowIngredients] = useState(false);
  const [loading, setLoading] = useState(false);

  //foods get shown in console for now
  useEffect(() => {
    console.log(foods);
  }, [foods]);

  //add function
  function add(e) {
    e.preventDefault();

    setFoods([...foods, item]);
    setItem("");
  }

  //generate function
  function generate(e) {
    e.preventDefault();
    if (foods.length < 1) return;
    var text = "I have";
    for (var i = 0; i < foods.length; i++) {
      if (i == 0) text += " " + foods[i];
      else text += ", " + foods[i];
    }
    setLoading(true);
    text += " give me 4 recipie list in details  seperated by @";
    const data = { text: text };
    axios
      .post("http://localhost:3000/api/Rec", data)
      .then((res) => {
        console.log(res.data);
        // return data gets console logged
        setFoods([]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  console.log(loading);
  useEffect(() => {
    foods.length > 0 ? setShowIngredients(true) : setShowIngredients(false);
  }, [foods]);

  return (
    <>
      <motion.div className="flex w-full h-[100vh] items-center justify-center flex-col pt-[9.5vh]  gap-4 overflow-hidden">
        <AnimatePresence>
          <motion.div
            className=" bg-[#2E2D27] w-full h-full flex  flex-col origin-bottom"
            style={{
              borderRadius: "2rem 2rem 0 0 ",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <motion.div
              className="bg-[#2E2D27] w-full h-[13%]  rounded-[2rem] px-[.5vw] py-[1vh] flex justify-evenly gap-2 items-center"
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 20,
                easing: [0.42, 0, 0.58, 1],
              }}
            >
              <motion.div
                className=" w-full h-[10%] rounded-[1.5rem]  flex justify-evenly gap-2 items-center font-Karla "
                initial={{ opacity: 0, height: "90%" }}
                animate={{ opacity: 1, height: "100%" }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                {/* Head */}
                <div className="flex h-full w-full px-[1vw] py-[.5vh] justify-center gap-[2vw] items-center ">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      setItem(e.target.value);
                    }}
                    placeholder="Insert Ingredients"
                    className=" w-[30%]  h-full text-[3vh] px-[1vw] shadow-inner bg-[#0000000e] drop-shadow-lg border-b-4 border-b-[#ffffff5b] outline-none"
                  />

                  <button
                    onClick={add}
                    className=" h-[80%] text-[2.7vh] font-Karla bg-[#ffffffb7] rounded-[1vh] border text-black font-semibold px-[1vw] disabled:bg-[#ffffff] disabled:opacity-50 disabled:cursor-pointer"
                    disabled={item.length < 1}
                  >
                    Add Ingredients
                  </button>
                  <button
                    onClick={generate}
                    className=" h-[80%] text-[2.7vh] font-Karla bg-gradient-to-t from-[#fff8ca] to-[#F4E896] rounded-[1vh] border text-black font-semibold px-[1vw] flex items-center justify-center gap-[1vh] disabled:bg-[#d67943] disabled:cursor-not-allowed disabled:opacity-50 "
                    disabled={loading}
                  >
                    <SparklesIcon className=" text-[#d67943]" fill="#d67943" />{" "}
                    Generate Recipe
                  </button>
                </div>
                {/* body */}
              </motion.div>
            </motion.div>

            <motion.div
              className=" h-[8%] w-full  px-[2vw] py-[.5vh] overflow-hidden origin-top"
              animate={{
                opacity: showIngredients ? 1 : 0,
                height: showIngredients ? "8%" : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              layout
            >
              <motion.ul className="flex w-full h-full gap-[2%] items-center justify-center ">
                <AnimatePresence>
                  {foods.map((item, index) => {
                    return (
                      <motion.li
                        key={index}
                        className=" h-[80%] px-[.5vw] rounded-[.5rem] flex gap-[.5vw] items-center justify-center bg-[white] text-black font-Karla text-[2.5vh] 2xl:text-[2vh]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.02,
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          easing: [0.42, 0, 0.58, 1],
                        }}
                        layout
                      >
                        <span className=" font-medium">{item}</span>
                        <button
                          onClick={() =>
                            setFoods(foods.filter((i) => i !== item))
                          }
                          className=""
                        >
                          <X className="w-[3.5vh] h-[3.5vh] bg-[#f57272] px-[.2vw] rounded 2xl:h-[2.9vh] 2xl:w-[2.9vh]" />
                        </button>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </motion.ul>
            </motion.div>

            {/* food list
        <div className={"bg-black w-[100vw] h-[80vh] m-auto rounded-3xl p-5"}>
          <div
            className="text-white flex justify-center
              list h-[80vh]"
          >
            <Card />
          </div>
        </div> */}
            <motion.div
              className=" h-[87%] px-[4vw] py-[3vh] bg-[#4d4d4d] mt-[1vh]"
              initial={{ opacity: 0, y: 50, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.78,
                type: "spring",
                stiffness: 100,
                damping: 20,
                easing: [0.42, 0, 0.58, 1],
              }}
              style={{
                borderRadius: "2rem 2rem 0 0 ",
              }}
            >
              <Card />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Foodlist;

// <div className=" bg-[#F4E896] w-80 h-20 rounded-3xl p-2">
//
//               </div>
