import { FC } from "react";
import {useNavigate} from "react-router-dom"

import { GenericButton } from "../genericComponents/index";

import { HOME_PAGE_TITLE, HOME_PAGE_TITLE_SUB, LOGIN, TO_REGISTER } from "../constes/index";

export const HomePage: FC = () => {

  const navigate = useNavigate();

  const goToLogin = () => navigate("/login")

  return (
    <div className="home-page-body">
      <div className="home-page-title">
        {HOME_PAGE_TITLE}
      </div>
      <div className="home-page-title-sub">
        {HOME_PAGE_TITLE_SUB}
      </div>
      <GenericButton 
        title={LOGIN}
        onClick={goToLogin}
      />
      <a href="http://localhost:3000/register">{TO_REGISTER}</a>
    </div>
  )
}
