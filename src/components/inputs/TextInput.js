import React from "react";
import styled from "styled-components";

const TextInput = (props) => {
  const { desc, company, handleChange, name, value } = props;

  return (
    <StyledContainer>
      <StyledLabel company={company}>{desc}</StyledLabel>
      <StyledInput
        type={company ? "number" : "text"}
        onChange={(e) => handleChange(e)}
        name={name}
        value={value}
      ></StyledInput>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  margin: 1rem;
  @media (max-width: 570px) {
    width: 55%;
  }

  @media (max-width: 470px) {
    width: 70%;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  border-radius: 0.3rem;
  padding: 0.7rem;
  outline: none;
  &:focus {
    box-shadow: 1px 1px 4px #ebebeb;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
  font-size: 1.5rem;
  text-transform: ${(props) => (props.company ? "uppercase" : "capitalize")};
`;

export default TextInput;
