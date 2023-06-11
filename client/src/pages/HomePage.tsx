import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { GenericButton, GenericInput } from "../genericComponents/index"
import { BasicBackground } from "../components/index"

import { HOME_PAGE_TITLE, HOME_PAGE_TITLE_SUB, LOGIN, REGISTER, NO_ACCOUNT } from "../constes/index";

import "../style/generalStyle.scss"
import "../style/homPageStyle.scss"

export const HomePage: FC = () => {

  const navigate = useNavigate();

  const onClickLogin = () => {
    //* Check if there is user 
    navigate("/profile")
  }

  const onPressRegister = () => navigate("/register")

  return (
    <BasicBackground imgName="home-page-background.jpg">
      <div className="home-body">
        <div className="home-right-screen">
          <div className="home-page-title">
            {HOME_PAGE_TITLE}
            <div>
              {HOME_PAGE_TITLE_SUB}
            </div>
          </div>
          <form noValidate autoCapitalize="sentences" autoComplete="on" className="login-form-container">
            <GenericInput
              label="user name"
              required
            />
            <GenericInput
              label="email"
              required
            />
            <GenericButton
              title={LOGIN}
              onClick={onClickLogin}
              style={{ height: "7vh" }}
            />
          </form>
        </div>
        <div className="home-left-screen">
          <img src="/image/users-logo.png" className="home-users-logo" />
          <div className="home-register-link">
            {NO_ACCOUNT}
            <GenericButton
              title={REGISTER}
              onClick={onPressRegister}
              style={{marginTop: "1.2vh"}}
            />
          </div>
        </div>
      </div >
    </BasicBackground>
  )
}
