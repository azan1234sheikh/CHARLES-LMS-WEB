const baseStyle = {
  color: "blue_gray.800",
  fontFamily: "Poppins",
};
const sizes = {
  h1_web: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: {
      md: "46px",
      base: "39px",
      sm: "42px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  h2_web: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: {
      md: "32px",
      base: "17px",
      sm: "30px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  h3: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: {
      base: "17px",
      sm: "20px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  isi_web: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontWeight: 500,
    fontStyle: "bold",
  },
  textxs: {
    fontSize: "8px",
    fontWeight: 500,
    fontStyle: "bold",
  },
  textlg: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontWeight: 500,
    fontStyle: "bold",
  },
  textxl: {
    fontSize: {
      base: "15px",
      sm: "18px",
    },
    fontWeight: 500,
    fontStyle: "bold",
  },
  headingxs: {
    fontSize: "9px",
    fontWeight: 600,
    fontStyle: "bold",
  },
  headings: {
    fontSize: "10px",
    fontWeight: 700,
    fontStyle: "bold",
  },
  headinglg: {
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "bold",
  },
  headingxl: {
    fontSize: "15px",
    fontWeight: 600,
    fontStyle: "bold",
  },
  heading2xl: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  heading3xl: {
    fontSize: {
      base: "15px",
      sm: "18px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  heading4xl: {
    fontSize: {
      base: "16px",
      sm: "19px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  heading5xl: {
    fontSize: {
      base: "18px",
      sm: "22px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
};
const defaultProps = {
  size: "isi_web",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
