import { css } from "@emotion/css";

export const footerContainer = css`
  background-color: #44911f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto auto;
  padding: 50px 0;
  font-family: PoppinsRegular;

  .footer--logo {
    width: 159px;
  }
  .footer--description {
    text-align: center;
    width: 500px;
    color: white;
  }
  section {
    font-family: PoppinsBold;
  }

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    padding: 50px 0;
    .footer--logo {
      width: 100px;
    }
    .footer--description {
      max-width: 300px;
    }
  }
`;
