import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "./Card";

function Foodlist() {
  const [list, setList] = useState(false);
  function add() {
    setList(list ? false : true);
    console.log("first");
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-[#2E2D27] rounded-3xl gap-4">
        <div
          className={`bg-[#2E2D27] w-full ${
            list ? "h-[80vh]" : "h-[10vh]"
          } m-auto rounded-3xl p-5`}
        >
          {/* Head */}
          <div className=" flex justify-evenly">
            <button
              onClick={add}
              className="bg-trasparent text-white font-mono text-2xl"
            >
              Add Ingredients
            </button>

            <button
              onClick={add}
              className="bg-[#d9d9d938] text-white font-bold font-mono text-2xl p-3 rounded-3xl"
            >
              Generate
            </button>
          </div>

          {/* body */}
        </div>

        {/* food list */}
        <div
          className={`bg-black w-full ${
            list ? "h-[10vh]" : "h-[80vh]"
          } m-auto rounded-3xl p-5`}
        >
          <div
            className={` flex justify-evenly text-white ${
              list ? "hidden" : "block"
            }`}
          >
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Foodlist;
