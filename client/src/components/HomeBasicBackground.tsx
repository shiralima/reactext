import { FC } from "react";

import { basicBackgroundProps } from "../types/interface/index";

import "../style/homeBgStyle.scss"

export const BasicBackground: FC<basicBackgroundProps> = ({ children }) => {
    return (
        <div className="general-body">
            <picture>
                <source media="(min-width:650px)" srcSet="/image/home-page-background.svg" />
                <img
                    className="home-background-img"
                    src='/image/home-page-background-2.svg'
                />
                {children}
            </picture>
        </div>
    );
};