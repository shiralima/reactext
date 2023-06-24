import { FC } from "react";

import { basicBackgroundProps } from "../types/interface/index";

import "../style/basicBgStyle.scss"

/**
 * BasicBackground
 * 
 * @param imgName file name for bg image
 * @optional @param children react element
 * 
* @returns generic basic background
 */
export const BasicBackground: FC<basicBackgroundProps> = ({ children, imgName }) => {
    return (
        <div className="general-body">
            <img
                className="home-background-img"
                src={`/image/${imgName}`}
            />
            {children}
        </div>
    );
};