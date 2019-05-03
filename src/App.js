import React, { useState, useEffect } from "react";
import SelectOptions from "./SelectOptions";
import Questions from "./Questions";
import Header from "./Header";

const App = () => {
  const [data, setData] = useState({ results: [] });
  const [number, setNumber] = useState("10");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const uri = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`;
      fetch(uri)
        .then(res => res.json())
        .then(data => (data.response_code === 0 ? setData(data) : setData([])));
    };
    fetchData();
  }, [number, category, difficulty, type]);

  return (
    <>
      <Header />
      <SelectOptions
        number={number}
        setNumber={setNumber}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        type={type}
        setType={setType}
      />
      <Questions data={data} />
    </>
  );
};

export default App;
