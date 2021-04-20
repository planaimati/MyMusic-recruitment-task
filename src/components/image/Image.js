import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { img } = props;
  return (
    <StyledImageContainer img={img}>
      <StyledImage src={img} alt="" />
    </StyledImageContainer>
  );
};

const StyledImageContainer = styled.div`
  display: ${(props) => (props.img ? "block" : "none")};
  height: 150px;
  width: 150px;
`;

const StyledImage = styled.img`
  //display: ${(props) => (props.src ? "block" : "none")};
  height: 100%;
  width: 100%;
  //border: 2px solid #c2c2c2;
`;

export default Image;
