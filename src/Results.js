import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  text-align: center;
  margin: 0 auto 10px;

  button {
    background: #03d1ab;
    padding: 10px 50px;
    color: #fff;
    border: transparent;
    border-radius: 0.5em;
    font-size: 1.5rem;
    cursor: pointer;
  }

  p {
    font-size: 2rem;
    color: #fff;
    background: #03d1ab;
    margin: 30px auto;
    width: 40%;
    min-width: 316px;
    padding: 10px 0;
    border-radius: 0.5em;
    display: none;
  }
`;

const Results = ({ count }) => {
  const handleSubmit = e => {
    e.target.previousSibling.style.display = "block";
    e.target.style.display = "none";
  };

  return (
    <ResultContainer>
      <p>
        You answered {count} {count === 1 ? "question" : "questions"} correctly!
      </p>
      <button type="button" onClick={e => handleSubmit(e)}>
        Submit
      </button>
    </ResultContainer>
  );
};
export default Results;
