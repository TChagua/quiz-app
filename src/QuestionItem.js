import React from "react";
import styled from "styled-components";
import he from "he";

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
  .disabled {
    pointer-events: none;
  }
`;
const QuestionItem = ({ item, count, onSetCount }) => {
  const handleClick = (e, answer) => {
    answer.correct
      ? (e.target.className = "green") &&
        (e.target.parentElement.className = "disabled")
      : (e.target.className = "red") &&
        (e.target.parentElement.className = "disabled");
    if (e.target.classList.contains("green")) onSetCount(count + 1);
  };

  return (
    <Wrapper>
      <h3>{he.decode(item.text)}</h3>
      <ol>
        {item.answers.map(answer => (
          <li
            key={answer.text + item.text}
            onClick={e => handleClick(e, answer)}
          >
            {he.decode(answer.text)}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};
export default QuestionItem;
