import React, { useState, useEffect } from "react";
import SelectOptions from "./SelectOptions";
import Questions from "./Questions";
import Header from "./Header";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general-knowledge");
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    const fetchData = () => {
      const url = `https://cocktail-trivia-api.herokuapp.com/api/category/${category}/difficulty/${difficulty}`;
      fetch(url)
        .then(res => res.json())
        .then(data => setData(data.map(item => ({ ...item, clicked: false }))));
    };
    fetchData();
  }, [category, difficulty]);

  return (
    <>
      <Header />
      <SelectOptions setCategory={setCategory} setDifficulty={setDifficulty} />
      <Questions data={data} />
    </>
  );
};

export default App;
