import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { motion } from "framer-motion";
function Foodlist() {
  const [foods, setFoods] = useState([]);
  const [item, setItem] = useState("");

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
    var text = "I have";
    for (var i = 0; i < foods.length; i++) {
      if (i == 0) text += " " + foods[i];
      else text += ", " + foods[i];
    }

    text += " give me 4 recipie list in details  seperated by @";
    const data = { text: text };
    axios.post("http://localhost:3000/api/Rec", data).then((res) => {
      console.log(res.data);
      // return data gets console logged
      setFoods([]);
    });
  }

  return (
    <>
      <motion.div
        className="flex items-center justify-center flex-col bg-[#2E2D27] rounded-3xl gap-4 overflow-hidden"
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
        <motion.div
          className="bg-[#2E2D27] w-full h-[10vh]  rounded-3xl p-5 flex justify-evenly gap-2 items-center"
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
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
              placeholder="insert ingredients"
              className=" outline-none py-1 px-3  rounded-3xl text-black font-mono font-semibold h-[5vh] w-[60vw] cursor-text"
            />

            <button
              onClick={add}
              className="bg-[#d9d9d938] text-white font-bold font-mono text-2xl px-4 rounded-3xl h-[5vh]"
            >
              Add
            </button>

            <button
              onClick={generate}
              className="bg-[#d9d9d938] text-white font-bold font-mono text-2xl px-2 rounded-3xl h-[5vh]"
            >
              Generate
            </button>
          </div>
          {/* body */}
          <div className=" bg-[#F4E896] w-80 h-20 rounded-3xl p-2">
            <ul className="flex flex-col">
              {foods.map((item, index) => {
                return (
                  <li key={index} className="text-black font-bold font-mono">
                    {item}
                    <button
                      onClick={() => setFoods(foods.filter((i) => i !== item))}
                      className="bg-[#000] text-white  text-sm rounded-3xl w-4 h-4 mx-2"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* food list */}
        <div className={"bg-black w-[100vw] h-[80vh] m-auto rounded-3xl p-5"}>
          <div
            className="text-white flex justify-center
              list h-[80vh]"
          >
            <Card />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Foodlist;
