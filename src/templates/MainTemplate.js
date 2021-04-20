import React from "react";
import styled from "styled-components";
import Form from "../components/form/Form.js";

const MainTemplate = () => {
  return (
    <StyledContainer>
      <Form />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainTemplate;
