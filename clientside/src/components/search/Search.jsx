import { React, useState } from "react";
import axios from "axios";
import data from "../../../foodData.json";

const Search = () => {
  const [foods, setFoods] = useState([]);
  const [item, setItem] = useState("");

  //console log area
  console.log(data);

  function add(e) {
    e.preventDefault();
    setFoods([...foods, item]);
    setItem("");
  }

  function generate(e) {
    e.preventDefault();
    const apiKey = "2a2d51b25c3a4a4c81b7fa122a6d8cd5";
    var text = "";
    for (var i = 0; i < foods.length; i++) {
      text += foods[i] + ",";
    }
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${text}`
      )
      .then((res) => {
        console.log(res.data);
        setFoods([]);
      });
  }

  return (
    <div className="bg-slate-800 w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-start items-center h-24">
        <h1 className="text-white text-4xl">Search Page</h1>
        <input
          type="text"
          className="mt-12 text-black px-2"
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
  );
};

export default Search;
