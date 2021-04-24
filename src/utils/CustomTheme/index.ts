import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        overflowX: "hidden",
      },
    },
  },
});

export default customTheme;
