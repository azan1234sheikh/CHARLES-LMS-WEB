import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "0px",
  outlineOffset: "0",
  cursor: "pointer",
  flexDirection: "row",
  fontFamily: "Plus Jakarta Sans",
});

const sizes = {
  md: defineStyle({
    h: "34px",
    fontSize: "14px",
    px: "10px",
  }),
  "2xl": defineStyle({
    h: "50px",
    fontSize: "14px",
    px: "32px",
  }),
  sm: defineStyle({
    h: "30px",
    fontSize: "12px",
    px: "8px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_900: {
        bg: "gray.900",
        color: "neutral.white",
      },
      cyan_400: {
        bg: "cyan.400",
        color: "neutral.black.0",
      },
      neutral_white: {
        bg: "neutral.white",
        color: "neutral.black.0",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_900"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "sm",
  },
});
export default Button;
