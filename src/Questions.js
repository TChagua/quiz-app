import React, { useState } from "react";
import styled from "styled-components";
import he from "he";
import Results from "./Results";

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  h3,
  ol {
    min-width: 316px;
    width: 40%;
  }

  ol {
    list-style: upper-alpha inside;
    padding: 0;
    border: solid 2px #0081d9;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    overflow: hidden;
  }

  h3 {
    padding: 20px 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    border: solid 2px #0081d9;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    word-wrap: break-word;
  }

  li {
    padding: 20px;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }

  li:hover {
    background: #dfdfdf;
  }

  ol > li:not(:last-child) {
    border-bottom: solid 2px #0081d9;
  }

  .red {
    background: #ee3e37;
  }
  .green {
    background: #03d1ab;
  }
`;

const Questions = props => {
  const [count, setCount] = useState(0);

  const handleClick = (e, answer, item) => {
    answer.correct && !item.clicked
      ? (e.target.className = "green")
      : !answer.correct && !item.clicked
      ? (e.target.className = "red")
      : (e.target.className = "");
    if (e.target.className === "green") setCount(count + 1);
    return (item.clicked = true);
  };

  return (
    <main>
      {props.data.length > 0 ? (
        props.data.map(item => (
          <Wrapper key={item.answers.correct + item.text}>
            <h3>{he.decode(item.text)}</h3>
            <ol>
              {item.answers.map(answer => (
                <li
                  key={answer.text + item.text}
                  onClick={e => handleClick(e, answer, item)}
                >
                  {he.decode(answer.text)}
                </li>
              ))}
            </ol>
          </Wrapper>
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Not Enough Questions in the database!
        </h2>
      )}
      <Results count={count} />
    </main>
  );
};

export default Questions;
