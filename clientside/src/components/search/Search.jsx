import { React, useState } from "react";
import axios from "axios";

const Search = () => {
  const [foods, setFoods] = useState([]);
  const [item, setItem] = useState("");

  function add(e) {
    e.preventDefault();
    setFoods([...foods, item]);
    setItem("");
  }

  function generate(e) {
    e.preventDefault();
    // const text =
    //   "I Have " + foods[0] + " and " + foods[1] + " what can I make with it?";
    var text = "I have";
    for (var i = 0; i < foods.length; i++) {
      if (i == 0) text += " " + foods[i];
      else text += ", " + foods[i];
    }
    text += " what can I make with it?";
    const data = { text: text };
    axios.post("http://localhost:3000/api/Rec", data).then((res) => {
      console.log(res.data);
      setFoods([]);
    });
  }

  return (
    <div>
      <div className="bg-slate-800 w-[100vw] h-[80vh]">
        <div className="flex flex-col justify-start items-center h-full">
          <h1 className="text-white text-4xl">Search Page</h1>
          <input
            type="text"
            className="mt-12"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button type="button" onClick={add} className="mt-8">
            Add
          </button>
          <button type="button" onClick={generate}>
            Generate
          </button>
          {foods.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
