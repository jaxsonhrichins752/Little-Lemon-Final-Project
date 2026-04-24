/**
 * MUI theme: brand colors aligned with Little Lemon (yellow primary, green secondary).
 * Imported in `main.tsx` via `ThemeProvider`. The empty type import augments MUI types
 * for X date-picker theme slots.
 */
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F4CE14', // Your yellow
    },
    secondary: {
      main: '#495E57', // Your green
    },
  },
});

export default theme;