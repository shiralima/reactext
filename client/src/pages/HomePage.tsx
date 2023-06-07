import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { GenericButton } from "../genericComponents/index"

import "../style/generalStyle.scss"
import "../style/homPageStyle.scss"


import { HOME_PAGE_TITLE, HOME_PAGE_TITLE_SUB, LOGIN, REGISTER, NO_ACCOUNT } from "../constes/index";

export const HomePage: FC = () => {

  const navigate = useNavigate();

  const goToLogin = () => navigate("/login")

  return (
    <div className="general-body">
      <div className="home-page-left-screen">
        {/* right screen: images, more discretion  */}
        <div className="home-page-title">
          {HOME_PAGE_TITLE}
          <span>
            {HOME_PAGE_TITLE_SUB}
          </span>
        </div>
      </div>
      {/* left screen: image, login form  */}
      <div className="home-page-right-screen home-page-left-screen">
        <GenericButton
          title={LOGIN}
          onClick={goToLogin}
        />
        <div className="home-page-register">
          {NO_ACCOUNT}
          <a href="http://localhost:3000/register" className="home-page-register">{REGISTER}</a>
        </div>
      </div>
    </div>
  )
}
