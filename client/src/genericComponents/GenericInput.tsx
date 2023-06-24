import { FC } from "react";
import TextField from '@mui/material/TextField';

import { genericInputProp } from "../types/interface/index";

/**
 * GenericInput
 * 
 * @optional @param label (optional) the label of the input
 * @optional @param style (optional) style for all the mui TextField
 * @optional @param rowNumber (optional) the lines number of the input
 * @optional @param required (optional) if the input is required
 * 
* @returns generic button
 */

export const GenericInput: FC<genericInputProp> = ({ label, style, rowNumber, required , onChange}) => {

  return (
    <TextField
      label={label}
      color="primary"
      multiline
      rows={rowNumber}
      required={required}
      onChange={onChange}      
      sx={{
        ...style,
        "& .MuiInputBase-input": {
          backgroundColor: "transparent",
        },
      }}
    />
  );
};
