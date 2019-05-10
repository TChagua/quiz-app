import React from "react";
import styled from "styled-components";
import * as options from "./optionsData";

const Options = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 200px;

  select {
    width: 300px;
    margin: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border: transparent;
    outline: none;
    border-radius: 0.5em;
    padding: 5px 15px;
    font-size: 1.1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #fff;
    -webkit-appearance: button;
    background-image: url(http://i62.tinypic.com/15xvbd5.png),
      -webkit-linear-gradient(#40a4f4, #40a4f4 40%, #40a4f4);
    background-color: #40a4f4;
    background-position: 97% center;
    background-repeat: no-repeat;
  }

  option {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }
`;

const SelectOptions = props => (
  <Options>
    <select onChange={event => props.onSetCategory(event.target.value)}>
      {options.categories.map(item => (
        <option value={item.value} key={item.value + item.value}>
          {item.label}
        </option>
      ))}
    </select>
    <select onChange={event => props.onSetDifficulty(event.target.value)}>
      {options.levels.map(item => (
        <option value={item.value} key={item.value + item.label}>
          {item.label}
        </option>
      ))}
    </select>
  </Options>
);

export default SelectOptions;
