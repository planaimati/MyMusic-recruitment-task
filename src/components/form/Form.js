import React, { useContext } from "react";
import styled from "styled-components";
import TextInput from "../inputs/TextInput";
import RadioInput from "../inputs/RadioInput";
import FileInput from "../inputs/FileInput";
import { AppContext } from "../../context/AppContext";
import Image from "../image/Image";
import Button from "../button/Button";

const Form = () => {
  const {
    radioValue,
    file,
    handleSetTextInput,
    handleSubmitButton,
    status,
    textInput,
  } = useContext(AppContext);

  const { name, surname, number } = textInput;

  const subject =
    radioValue === " " ? "pesel" : radioValue === "firma" ? "nip" : "pesel";

  return (
    <StyledContainer>
      <StyledForm>
        <TextInput
          desc="imię"
          handleChange={handleSetTextInput}
          name="name"
          value={name}
        />
        <TextInput
          desc="nazwisko"
          handleChange={handleSetTextInput}
          name="surname"
          value={surname}
        />
        <StyledRadioContainer>
          <RadioInput value="osoba prywatna" />
          <RadioInput value="firma" />
        </StyledRadioContainer>
        <TextInput
          desc={subject}
          company={true}
          handleChange={handleSetTextInput}
          name="number"
          value={number}
        />
        <FileInput />
      </StyledForm>
      <Image img={file} />
      <StyledInfo>{status ? null : "Wprowadzono niepoprawne dane"}</StyledInfo>
      <Button type="submit" handleSubmit={handleSubmitButton}>
        wyślij
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50%;
  width: 60rem;

  @media (max-width: 570px) {
    height: 65%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 50%;
  width: 100%;
`;

const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  @media (max-width: 570px) {
    width: 55%;
  }

  @media (max-width: 470px) {
    width: 70%;
  }
`;

const StyledInfo = styled.p`
  color: red;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

export default Form;
