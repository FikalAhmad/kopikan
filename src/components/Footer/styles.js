import { css } from "@emotion/css";

export const footerContainer = css`
  background-color: #44911f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto auto;
  padding: 50px 0;

  .footer--logo {
    width: 159px;
  }
  .footer--description {
    font-family: PoppinsRegular;
    text-align: center;
    width: 500px;
    color: white;
  }
  section {
    font-family: PoppinsBold;
  }
`;
