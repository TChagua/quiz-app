import React from "react";
import styled from "styled-components";
import * as options from "./optionsData";

const Options = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto 150px;

  select,
  input {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    box-sizing: border-box;
    margin: 10px 5px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    background-color: #fff;
  }

  option {
    font-size: 0.9rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }
`;

const SelectOptions = props => (
  <Options>
    <input
      type="number"
      value={props.number}
      onChange={event => props.setNumber(event.target.value)}
    />
    <select onChange={event => props.setCategory(event.target.value)}>
      {options.categories.map(item => (
        <option value={item.value} key={item.value + item.label}>
          {item.label}
        </option>
      ))}
    </select>
    <select onChange={event => props.setDifficulty(event.target.value)}>
      {options.levels.map(item => (
        <option value={item.value} key={item.value + item.label}>
          {item.label}
        </option>
      ))}
    </select>
    <select onChange={event => props.setType(event.target.value)}>
      {options.types.map(item => (
        <option value={item.value} key={item.value + item.label}>
          {item.label}
        </option>
      ))}
    </select>
  </Options>
);

export default SelectOptions;
