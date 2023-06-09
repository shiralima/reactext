import { FC } from "react"
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
          <form noValidate autoCapitalize="sentences" autoComplete="on" className="login-form-container">
            <GenericInput
              label="user name"
              isRequired
            />
            <GenericInput
              label="email"
              isRequired
            />
            <GenericButton
              title={LOGIN}
              onClick={onClickLogin}
              style={{height: "7vh"}}
            />
          </form>
        </div>
        <div className="home-page-register">
          {NO_ACCOUNT}
          <a href="http://localhost:3000/register" className="home-page-register">{REGISTER}</a>
        </div>
      </BasicBackground>
    </div>
  )
}
