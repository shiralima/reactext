import { FC } from "react";
import { Button } from "@mui/material";

import { genericButtonProp } from "../types/interface/index";

import { genericBtnHoverColor, genericBtnColor } from '../style/variables.scss'

/**
 * GenericButton
 * 
 * @param onClick function while clicking on the button
 * @optional @param title (optional) the text of the button (if undefined - give icon)
 * @optional @param iconClassName (optional) different class by the size of the button (enum - small / medium / large)
 * @optional @param disabled (optional) if the button is disabled
 * @optional @param iconUrl (optional) an icon to the button (img src)
 * @optional @param style (optional) btn mui style
 * 
* @returns generic button
 */

export const GenericButton: FC<genericButtonProp> = ({ onClick, title, iconClassName, disabled, iconUrl, style }) => {
    return (
        <Button
            variant="contained"
            sx={{
                ...style,
                backgroundColor: genericBtnColor,
                '&:hover': {
                    backgroundColor: genericBtnHoverColor,
                },
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
            {iconUrl ?
                <img src={iconUrl} className={iconClassName} />
                : null
            }
        </Button>
    );
};