import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import MainView from './views/MainView'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainView>hello from app</MainView>
    </>
  );
};



export default App;
