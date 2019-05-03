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
  ol,
  div {
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

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    border: solid 2px #03d1ab;
    border-radius: 5px;
    padding: 5px 20px;
  }
`;

const Questions = props =>
  props.data && props.data.results ? (
    props.data.results.map(item => (
      <Wrapper key={item.category + item.correct_answer + item.question}>
        <div>
          <span>{item.category}</span>
          <span>{item.difficulty}</span>
        </div>
        <h3>{he.decode(item.question)}</h3>
        <ol>
          <li
            key={item.correct_answer + item.question}
            onClick={e => (e.target.style.background = "#03D1AB")}
          >
            {he.decode(item.correct_answer)}
          </li>
          {item.incorrect_answers.map(answer => (
            <li
              key={answer + item.question}
              onClick={e => (e.target.style.background = "#EE3E37")}
            >
              {he.decode(answer)}
            </li>
          ))}
        </ol>
      </Wrapper>
    ))
  ) : (
    <h2 style={{ textAlign: "center" }}>
      Not Enough Questions in the database!
    </h2>
  );

export default Questions;
