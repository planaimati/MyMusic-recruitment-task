import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../../context/AppContext";

const FileInput = () => {
  const { handleSetFile, file } = useContext(AppContext);
  
  return (
    <StyledContainer>
      <StyledInput
        type="file"
        id="file-input"
        accept=" .jpg, .jpeg"
        onChange={(e) => handleSetFile(e)}
        
      ></StyledInput>
      <StyledLabel htmlFor="file-input">wybierz zdjęcie</StyledLabel>
      <StyledSpan>{!file ? "Nie wybrano zdjęcia" : file.name}</StyledSpan>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 33%;
  height: 10%;
  position: relative;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  background-color: royalblue;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const StyledSpan = styled.span`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export default FileInput;
