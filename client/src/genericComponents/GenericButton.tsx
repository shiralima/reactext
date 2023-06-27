import { FC } from "react";
import { Button } from "@mui/material";

import { genericButtonProp } from "../types/interface/index";

import color from '../style/variables.scss'
import '../style/genericButtonStyle.scss'

/**
 * GenericButton
 * 
 * @param onClick function while clicking on the button
 * @optional @param title (optional) the text of the button (if undefined - give icon)
 * @optional @param iconClassName (optional) different class by the size of the button (enum - small / medium / large)
 * @optional @param disabled (optional) if the button is disabled
 * @optional @param iconName (optional) an icon to the button (file name form public/image) 
 * @optional @param style (optional) btn mui style
 * 
* @returns generic button
 */

export const GenericButton: FC<genericButtonProp> = ({ onClick, title, iconClassName, disabled, iconName, style }) => {
    return (
        <Button
            variant="contained"
            sx={{
                ...style,
                backgroundColor: color.genericBtnColor,
                '&:hover': {
                    backgroundColor: color.genericBtnHoverColor,
                },
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
            {iconName ?
                <img src={`/image/${iconName}`} className={`btn-icon-generic-style ${iconClassName}`} />
                : null
            }
        </Button>
    );
};