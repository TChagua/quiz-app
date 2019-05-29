import React from "react";
import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
 0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
`;

const ResultContainer = styled.div`
  text-align: center;
  margin: 50px auto;

  button {
    background: #03d1ab;
    padding: 10px 70px;
    color: #fff;
    border: transparent;
    border-radius: 0.5em;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background: #03b896;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  }

  p {
    position: fixed;
    width: 40%;
    top: 50%;
    left: 30%;
    z-index: 10;
    font-size: 2rem;
    outline: 9999px solid rgba(0, 0, 0, 0.5);
    color: #fff;
    background: #03d1ab;
    min-width: 316px;
    padding: 10px 0;
    display: none;
  }
  i {
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
  }

  .slide-in {
    animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const Results = ({ count }) => {
  const handleSubmit = e => {
    e.target.previousSibling.className = "slide-in";
    e.target.previousSibling.style.display = "block";
  };

  const handleClose = e => {
    e.target.parentElement.style.display = "none";
  };

  return (
    <ResultContainer>
      <p>
        You answered {count} {count === 1 ? "question" : "questions"} correctly!
        <i className="fas fa-times" onClick={e => handleClose(e)} />
      </p>
      <button type="button" onClick={e => handleSubmit(e)}>
        Submit
      </button>
    </ResultContainer>
  );
};
export default Results;
