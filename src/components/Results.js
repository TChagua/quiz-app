import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

export const slideIn = keyframes`
 0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
`

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

    &:hover {
      background: #03b896;
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }

  p {
    position: fixed;
    top: 50%;
    left: 30%;
    z-index: 10;
    min-width: 316px;
    width: 40%;
    padding: 30px 0;
    border: transparent;
    border-radius: 0.5em;
    font-size: 2rem;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
    color: #fff;
    background: #03d1ab;
    animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  i {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
`

const Results = ({ count }) => {
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    setShow(true)
  }

  const handleClose = (e) => {
    setShow(false)
  }

  return (
    <ResultContainer>
      {show && (
        <p>
          You answered {count} {count === 1 ? 'question' : 'questions'} correctly!
          <i className='fas fa-times' onClick={(e) => handleClose(e)} />
        </p>
      )}
      <button type='button' onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </ResultContainer>
  )
}

export default Results
