import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { LoginPage } from "./pages/LoginPage";
import { ConversationPage, HomePage, MessengerPage, NotFoundPage, ProfilePage, RegisterPage } from "./pages";


function App() {

  const server = async () => {
    const res = await axios.get("http://localhost:8080/");
    console.log('res', res.data);
  };


  return (
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
  );
}

export default App;
