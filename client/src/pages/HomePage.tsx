import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { GenericButton, GenericInput } from "../genericComponents/index"

import "../style/generalStyle.scss"
import "../style/homPageStyle.scss"


import { HOME_PAGE_TITLE, HOME_PAGE_TITLE_SUB, LOGIN, REGISTER, NO_ACCOUNT } from "../constes/index";
import { BasicBackground } from "../components"

export const HomePage: FC = () => {

  const navigate = useNavigate();

  const goToLogin = () => navigate("/login")

  return (
    <div className="general-body">
      <BasicBackground>
        <div className="home-left-screen">
          <div className="home-page-title">
            {HOME_PAGE_TITLE}
            <span>
              {HOME_PAGE_TITLE_SUB}
            </span>
          </div>
          <div className="login-container">
            <GenericInput
              label="user name"
              // style={{ marginBottom: "1.5vh" }}
            />
            <GenericInput
              label="email"
              // style={{ marginBottom: "1.5vh" }}
            />
            <GenericButton
              title={LOGIN}
              onClick={goToLogin}
            />
          </div>
        </div >
        <div className="home-page-register">
          {NO_ACCOUNT}
          <a href="http://localhost:3000/register" className="home-page-register">{REGISTER}</a>
        </div>
      </BasicBackground>
    </div>
  )
}
