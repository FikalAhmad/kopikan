import { css } from "@emotion/css";

export const HAContainer = css`
  display: flex;
  margin: 0 50px;
  padding-top: 100px;
  font-family: PoppinsRegular;
  flex-direction: row-reverse;

  .description {
    padding-right: 50px;
  }
  h1 {
    font-size: 32px;
    margin: 20px 0;
  }
  p {
    font-size: 16px;
    text-align: justify;
    margin-bottom: 20px;
    max-width: 800px;
  }
  img {
    border-radius: 15px;
  }

  /* RESPONSIVE 576PX */
  @media screen and (max-width: 576px) {
    margin: 0 25px;
    display: flex;
    flex-direction: column;

    .description {
      padding-right: 0;
    }
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
      text-align: justify;
      margin-bottom: 15px;
    }
    img {
      border-radius: 15px;
    }
    .button--more {
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
  }
`;
