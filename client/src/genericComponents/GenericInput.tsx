import { FC } from "react";
import TextField from '@mui/material/TextField';

import { genericInputProp } from "../types/interface/index";


export const GenericInput: FC<genericInputProp> = ({ label, style, rowNumber, isRequired }) => {

  return (
    <TextField
      label={label}
      color="primary"
      multiline
      rows={rowNumber}
      required={isRequired}
      sx={{
        ...style,
        "& .MuiInputBase-input": {
          backgroundColor: "transparent",
        },
      }}
    />
  );
};
