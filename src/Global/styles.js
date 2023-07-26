import { injectGlobal } from "@emotion/css";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";

const globalStyle = injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  @font-face {
    font-family: PoppinsBold;
    src: url(${PoppinsBold});
  }
  @font-face {
    font-family: PoppinsSemiBold;
    src: url(${PoppinsSemiBold});
  }
  @font-face {
    font-family: PoppinsRegular;
    src: url(${PoppinsRegular});
  }
`;

export default globalStyle;
