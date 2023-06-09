import { FC } from "react";
import { Button } from "@mui/material";

import { genericButtonProp } from "../types/interface/index";

import colors  from '../style/variables.scss'

export const GenericButton: FC<genericButtonProp> = ({ title, style, onClick, iconUrl, iconClassName, isDisabled }) => {
    return (
        <Button
            variant="contained"
            sx={{
                ...style,
                color: "white",
                backgroundColor: colors.genericBtnColor,
                '&:hover': {
                    backgroundColor: colors.genericBtnHoverColor,
                },
            }}
            onClick={onClick}
            disable={isDisabled}
        >
            {title}
            {iconUrl ? <img src={iconUrl} className={iconClassName} /> : null}
        </Button>
    );
};