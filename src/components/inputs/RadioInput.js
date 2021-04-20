import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";

const RadioInput = (props) => {
  const { handleSetRadioValue, radioValue } = useContext(AppContext);
  const { value } = props;

  return (
    <StyledContainer>
      <StyledLabel>
        <StyledInput
          type="radio"
          value={value}
          checked={radioValue === value}
          onChange={(e) => handleSetRadioValue(e)}
        ></StyledInput>
        {value}
      </StyledLabel>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`;

const StyledInput = styled.input`
  margin-right: 1rem;
`;

const StyledLabel = styled.label``;

export default RadioInput;
