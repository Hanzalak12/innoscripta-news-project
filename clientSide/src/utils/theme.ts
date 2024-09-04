import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50",  // A deep, sophisticated navy blue for primary elements
    },
    secondary: {
      light: "#ECF0F1", // A light, airy grayish-white for backgrounds or subtle accents
      main: "#E74C3C",  // A vibrant coral red for secondary elements
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",  // Switched to a modern, clean font
    body1: {
      textAlign: "left",
      fontSize: "1rem", // Increased font size for better readability
      color: "#34495E", // A slightly softer dark slate gray for body text
      lineHeight: "1.6rem",
    },
    h2: {
      color: "#2C3E50", // Consistent with the primary color for headings
      fontWeight: "700", // Slightly bolder for better emphasis
    },
    h3: {
      color: "#2C3E50",
      fontWeight: "700",
    },
    h4: {
      color: "#2C3E50",
      fontWeight: "600", // Adjusted weight for better hierarchy
    },
    h5: {
      color: "#2C3E50",
      fontWeight: "600",
    },
    h6: {
      color: "#2C3E50",
      fontWeight: "500", // Even lighter for lower-level headings
    },
  },
});
