import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { ConversationPage, HomePage, MessengerPage, NotFoundPage, ProfilePage, RegisterPage, LoginPage } from "./pages/index";

import { MY_THEME } from "./constes/styles/index";

function App() {

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.style.overflow = 'hidden';
    const bodyElement = document.body;
    bodyElement.style.margin = "0 0 0 0";
  }, [])


  return (
    <ThemeProvider theme={MY_THEME}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/login"} Component={LoginPage} />
          <Route path={"/register"} Component={RegisterPage} />
          <Route path={"/messenger"} Component={MessengerPage} />
          <Route path={"/conversation"} Component={ConversationPage} />
          <Route path={"/profile"} Component={ProfilePage} />
          <Route path={"*"} Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
