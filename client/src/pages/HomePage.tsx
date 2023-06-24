import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { GenericButton, GenericInput } from "../genericComponents/index"
import { BasicBackground } from "../components/index"

import { HOME_PAGE_TITLE, HOME_PAGE_TITLE_SUB, LOGIN, REGISTER, NO_ACCOUNT } from "../constes/index";
import { LoginDetailsType, ObjType } from "../types/type/index";

import "../style/generalStyle.scss"
import "../style/homPageStyle.scss"

export const HomePage: FC = () => {

  const [loginDetails, setLoginDetails] = useState<LoginDetailsType>({ email: "", password: "" })

  const navigate = useNavigate();

  const onClickLogin = () => {
    //* Check if there is user 
    navigate("/profile")
  }

  const onPressRegister = () => navigate("/register")

  const onChangeInput = ({ key, value }: ObjType<LoginDetailsType>) => setLoginDetails(prev => ({
    ...prev,
    [key]: value
  }))

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
              label="email"
              required
              onChange={(event) => onChangeInput({ key: "email", value: event.target.value })}
            />
            <GenericInput
              label="password"
              required
              onChange={(event) => onChangeInput({ key: "password", value: event.target.value })}
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
              style={{ marginTop: "1.2vh" }}
            />
          </div>
        </div>
      </div >
    </BasicBackground>
  )
}
