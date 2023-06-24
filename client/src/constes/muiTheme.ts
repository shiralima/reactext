import { createTheme } from "@mui/material";

import { maniColor } from '../style/variables.scss';

export const MY_THEME = createTheme({
  palette: {
    primary: {
      main: maniColor
    }
  }
});

