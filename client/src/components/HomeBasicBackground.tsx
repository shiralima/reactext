import { FC } from "react";

import { basicBackgroundProps } from "../types/interface/index";

import "../style/homeBgStyle.scss"

export const BasicBackground: FC<basicBackgroundProps> = ({ children }) => {
    return (
        <div className="general-body">
                <img
                    className="home-background-img"
                    src='/image/home-page-background.jpg'
                />
                {children}
        </div>
    );
};