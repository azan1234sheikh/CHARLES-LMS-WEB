import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define custom sizes
const sizes = {
  xs: defineStyle({
    maxW: "1160px",
    w: "100%",
    mx: "auto",
  }),
};

// export the component theme
const Container = defineStyleConfig({
  sizes,
  defaultProps: { size: "xs" },
});
export default Container;
