import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { handleSubmit } = props;
  return (
    <StyledButton onClick={(e) => handleSubmit(e)}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: royalblue;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.5rem;
  border: none;
  width: 10rem;
`;

export default Button;
