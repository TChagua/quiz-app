import React from "react";
import QuestionItem from "./QuestionItem";

const Questions = ({ data, onSetCount, count }) => {
  return (
    <main>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <QuestionItem
            item={item}
            index={index}
            count={count}
            onSetCount={onSetCount}
            key={item.answers.correct + item.text}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Not Enough Questions in the database!
        </h2>
      )}
    </main>
  );
};

export default Questions;
