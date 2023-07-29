import { injectGlobal } from "@emotion/css";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";

const globalStyle = injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
  @media screen and (min-width: 320px) and (max-width: 576px) {
    *{
      overflow-x: hidden;
    }
  }
  `;

export default globalStyle;
