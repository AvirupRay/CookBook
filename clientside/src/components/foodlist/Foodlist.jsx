import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Card from "./Card";
import Items from "./Items";

function Foodlist() {
  const [list, setList] = useState(false);
  function add() {
    setList(list ? false : true);
    console.log("first");
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-[#2E2D27] rounded-3xl gap-4 overflow-hidden">
        <div className="bg-[#2E2D27] w-full h-[10vh] rounded-3xl p-5 flex justify-center items-end gap-4">
          {/* Head */}
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="insert ingredients"
            className=" outline-none py-1 px-3  rounded-3xl text-black font-mono font-semibold h-[5vh] mt-10 w-[60vw] cursor-text"
          />

          <button
            onClick={add}
            className="bg-[#d9d9d938] text-white font-bold font-mono text-2xl px-2 rounded-3xl h-[5vh]"
          >
            Generate
          </button>

          {/* body */}
        </div>

        {/* food list */}
        <div className={"bg-black w-[100vw] h-[80vh] m-auto rounded-3xl p-5"}>
          <div
            className="text-white flex justify-center
              list h-[80vh]"
          >
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Foodlist;
