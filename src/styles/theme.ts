// theme.js
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: "#FFFFFF",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
});
