import sizes from "./Sizes"
import colors from "./Colors"

const Fonts = {
  h1: {
    fontFamily: "geomanist",
    fontSize: sizes.h1,
    lineHeight: "150%",
  },
  h2: {
    fontFamily: "geomanist",
    fontSize: sizes.h2,
    lineHeight: "150%",
  },
  h3: {
    fontFamily: "geomanist",
    fontSize: sizes.h3,
    lineHeight: "150%",
  },
  h4: {
    fontFamily: "geomanist",
    fontSize: sizes.h4,
    lineHeight: "150%",
  },
  h5: {
    fontFamily: "geomanist",
    fontSize: sizes.h5,
    lineHeight: "150%",
  },
  h6: {
    fontFamily: "geomanist",
    fontSize: sizes.h6,
    lineHeight: "150%",
  },

  header: {
    fontFamily: "geomanist",
    fontSize: sizes.header,
    lineHeight: "150%",
    letterSpacing: 0.5,
    color: colors.black,
  },
  subHeader: {
    fontFamily: "geomanist",
    fontSize: sizes.subHeader,
    lineHeight: "150%",
    letterSpacing: 0.5,
    color: colors.black,
  },

  title: {
    fontFamily: "geomanist",
    fontSize: sizes.title,
    lineHeight: "150%",
    letterSpacing: 0.5,
    color: colors.black,
  },

  subTitle: {
    fontFamily: "geomanist",
    fontSize: sizes.subTitle,
    lineHeight: "150%",
    letterSpacing: 0.5,
    color: colors.black,
  },

  semibold: {
    fontFamily: "geomanist",
    fontWeight: 400,
  },

  bold: {
    fontFamily: "geomanist",
    fontWeight: 500,
  },

  light: {
    fontFamily: "geomanist",
    fontWeight: 100,
  },

  normal: {
    fontFamily: "geomanist",
    fontWeight: 300,
  },

  default: {
    fontFamily: "geomanist",
    fontSize: sizes.body,
  },

  body: {
    fontFamily: "geomanist",
    fontSize: sizes.body,
    fontWeight: 300,
    lineHeight: "200%",
    color: colors.darkGray,
  },

  caption: {
    fontSize: sizes.caption,
    fontStyle: "italic",
  },
  small: {
    fontSize: sizes.small,
    lineHeight: "200%",
    color: colors.darkGray,
  },
  button: {
    fontSize: sizes.button,
    color: colors.white,
  },
}

export default Fonts
