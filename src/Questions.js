import React, { useState } from "react";
import Results from "./Results";
import QuestionItem from "./QuestionItem";

const Questions = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <main>
      {data && data.length > 0 ? (
        data.map(item => (
          <QuestionItem item={item} count={count} setCount={setCount} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Not Enough Questions in the database!
        </h2>
      )}
      {data.length > 0 && <Results count={count} />}
    </main>
  );
};

export default Questions;
