import React from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  width: 100%;

  h1 {
    font-size: 3rem;
    font-family: "Akronim", cursive;
    color: #03d1ab;
    margin: 0;
    line-height: 2;
    text-shadow: 0 5px 1px rgba(0, 0, 0, 0.04);
    background-color: #fff;
    text-align: center;
  }
`;
const Header = () => (
  <StyledHeader>
    <h1>It is Quiz Time!</h1>
  </StyledHeader>
);

export default Header;
