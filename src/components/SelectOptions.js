import React from "react";
import Select from "react-select";
import styled from "styled-components";
import * as options from "./optionsData";

const Options = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 200px;
  font-family: "Nunito", sans-serif;
`;

const customStyles = {
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "aliceblue" : "#40a4f4",
    color: isFocused ? "#03d1ab" : "#fff",
    fontSize: "1rem",
    fontWeight: "400",
    cursor: "pointer"
  }),
  control: styles => ({ ...styles, backgroundColor: "#40a4f4", borderRadius: "1rem" }),
  container: styles => ({
    ...styles,
    borderRadius: "1rem",
    backgroundColor: "#40a4f4",
    width: "300px",
    margin: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
  }),
  placeholder: styles => ({ ...styles, backgroundColor: "#40a4f4", color: "#fff", fontSize: "1.1rem", fontWeight: "700" }),
  singleValue: styles => ({ ...styles, color: "#fff", fontSize: "1.1rem", fontWeight: "700" }),
  dropdownIndicator: styles => ({ ...styles, color: "#fff", cursor: "pointer", "&:hover": { color: "#03d1ab" } }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: "#fff" }),
  menu: styles => ({ ...styles, borderRadius: "1rem" }),
  menuList: styles => ({ ...styles, padding: 0, margin: 0, borderRadius: "1rem" })
};

const SelectOptions = props => (
  <Options>
    <Select
      maxMenuHeight="auto"
      styles={customStyles}
      placeholder="General Knowledge"
      value={props.category.label}
      options={options.categories}
      onChange={option => props.onSetCategory(option.value)}
    />
    <Select
      styles={customStyles}
      placeholder="easy"
      value={props.difficulty.label}
      options={options.levels}
      onChange={option => props.onSetDifficulty(option.value)}
    />
  </Options>
);

export default SelectOptions;
