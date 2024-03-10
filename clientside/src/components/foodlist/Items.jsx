import React from "react";

const items = [
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "banana",
  },
];

function Items() {
  return (
    <div className="">
      {/* search */}
      <div className=" h-[5vh] mt-10 w-[60%] flex justify-center items-center ">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="insert ingredients"
          className=" outline-none h-full w-full py-1 px-3 cursor-default rounded-2xl text-black font-mono font-semibold"
        />
      </div>

      {/* recommendation */}
      <div className="w-[80vw] bg-[#F4E896] h-[40vh] mt-10 rounded-2xl"></div>
    </div>
  );
}

export default Items;
