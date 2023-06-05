import { FC } from "react";
import TextField from '@mui/material/TextField';
import { genericInputProp } from "../types/interface/index";


export const GenericInput: FC<genericInputProp> = ({ label, style }) => {
    return (
        <TextField
            label={label}
            sx={{
                style,
                color: "aliceblue",
                "& .MuiInputBase-input": {
                    backgroundColor: "lightgray",
                },
            }}
        />
    );
};
