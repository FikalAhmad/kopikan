import { css } from "@emotion/css";

export const footerContainer = css`
  margin: 80px auto auto;
  background-color: #44911f;
  font-family: PoppinsRegular;
  padding: 40px 0 30px;
  color: white;
  .footer--first {
    margin: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .footer--logo {
    width: 159px;
  }
  .footer--description {
    text-align: justify;
    max-width: 300px;
  }
  section {
    font-family: PoppinsBold;
  }
  hr {
    margin: 0 50px;
  }
  .footer--second {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    margin-bottom: 15px;
  }
  .link {
    overflow-y: hidden;
    height: 24px;
  }

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    padding: 20px 0;
    .footer--first {
      margin: 0 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .footer--logo {
      width: 100px;
    }
    .footer--description {
      max-width: 250px;
    }
    p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 400px) {
    .footer--first {
      margin: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .footer--logo {
      width: 100px;
    }
    .footer--description {
      max-width: 300px;
    }
  }
`;
