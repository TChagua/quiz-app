import React from "react";
import Loadable from "react-loadable";
const QuestionItem = Loadable({
  loader: () => import(/* webpackChunkName: 'QuestionItem' */ "./QuestionItem"),
  loading: () => <span />
});
const Questions = ({ data, onSetCount, count }) => {
  if (data === undefined) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  return (
    <main>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <QuestionItem item={item} index={index} count={count} onSetCount={onSetCount} key={item.answers.correct + item.text} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>Not Enough Questions in the database!</h2>
      )}
    </main>
  );
};

export default Questions;
