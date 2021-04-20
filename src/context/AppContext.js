import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state

  const [radioValue, setRadioValue] = useState("");
  const [status, setStatus] = useState(true);
  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState({
    name: "",
    surname: "",
    number: "",
  });

  const url = "https://localhost:60001/Contractor/Save";

  const handleSetRadioValue = (e) => {
    const value = e.target.value;

    setRadioValue(value);
  };

  const handleSetFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSetTextInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTextInput({ ...textInput, [name]: value });
  };

  const checkNumber = (num, status) => {
    if (status === "osoba prywatna" && num === 11) {
      return true;
    } else if (status === "firma" && num === 10) {
      return true;
    } else return false;
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const { name, surname, number } = textInput;

    if (
      textInput.name !== "" &&
      textInput.surname !== "" &&
      radioValue !== "" &&
      textInput.number.length > 0 &&
      file
    ) {
      if (checkNumber(textInput.number.length, radioValue)) {
        fetch(url, {
          method: "POST",

          body: JSON.stringify({
            name,
            surname,
            number,
            foto: file,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setStatus(true);
        setTextInput({ name: "", surname: "", number: "" });
        setFile(null);
        setRadioValue("");
      } else setStatus(false);
    } else {
      setStatus(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        radioValue,
        handleSetRadioValue,
        handleSetFile,
        file,
        handleSetTextInput,
        handleSubmitButton,
        status,
        textInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
