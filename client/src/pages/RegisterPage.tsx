import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"

import { GenericButton, GenericInput } from "../genericComponents/index"
import { BasicBackground } from "../components/index"

import { REGISTER } from "../constes/index";
import { ObjType, RegisterDetailsType } from "../types/type/index";

import "../style/generalStyle.scss"
import "../style/homPageStyle.scss"
import "../style/registerPageStyle.scss"


export const RegisterPage: FC = () => {

  const [registerDetails, setRegisterDetails] = useState<RegisterDetailsType>({ email: "", password: "", username: "", confirmPassword: "" })

  const navigate = useNavigate();

  const onClickRegister = () => {
    //* Check if there is user 
    navigate("/profile")
  }

  const onClickLogin = () => navigate("/")

  const onChangeInput = ({ key, value }: ObjType<RegisterDetailsType>) => setRegisterDetails(prev => ({
    ...prev,
    [key]: value
  }))

  return (
    <BasicBackground imgName="home-page-background.jpg">
      <div className="home-left-screen resister-left-screen">
        <form noValidate autoCapitalize="sentences" autoComplete="on" className="login-form-container resister-form-container">
          <GenericInput
            label="Your Name"
            required
            onChange={(event) => onChangeInput({ key: "username", value: event.target.value })}
          />
          <GenericInput
            label="Email Address"
            required
            onChange={(event) => {
              onChangeInput({ key: "email", value: event.target.value })
            }}
          />
          <GenericInput
            label="Password"
            required
            onChange={(event) => onChangeInput({ key: "password", value: event.target.value })}
          />
          <GenericInput
            label="Confirm Password"
            required
            onChange={(event) => onChangeInput({ key: "confirmPassword", value: event.target.value })}
          />
          <GenericButton
            title={REGISTER}
            onClick={onClickRegister}
            style={{ marginTop: "1.2vh" }}
          />
        </form>
      </div>
    </BasicBackground>
  )
}
