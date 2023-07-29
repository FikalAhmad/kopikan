import { css } from "@emotion/css";

export const productContainer = css`
  margin: 0 50px;
  font-family: PoppinsRegular;
  h1 {
    margin: 30px 0 0;
  }
  h2 {
    color: green;
    margin: 30px 0 10px;
  }
  .card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 3em 3em;
  }
  .card--container {
    min-width: 268px;
    min-height: auto;
    border: 1px solid #d9d9d9;
    padding: 34px;
    border-radius: 10px;
  }
  .image--card {
    width: 100%;
    border-radius: 5px;
  }
  .p--title {
    font-family: PoppinsSemiBold;
    font-size: 16px;
    margin: 10px 0 0;
  }
  .desc {
    font-size: 14px;
    color: #7c7c7c;
    margin: 10px 0 0;
  }
  .testing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }

  /* Responsive 768px */
  @media screen and (max-width: 768px) {
    margin: 0 25px;
    h1 {
      margin: 10px 0 0;
      font-size: 32px;
    }
    h2 {
      margin: 20px 0 10px;
      font-size: 24px;
    }
  }

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    margin: 0 25px;
    h1 {
      margin: 10px 0 0;
      font-size: 32px;
    }
    h2 {
      margin: 20px 0 10px;
      font-size: 24px;
    }
  }

  /* Responsive 400px */
  @media screen and (max-width: 400px) {
    margin: 0 25px;
    h1 {
      margin: 10px 0 0;
      font-size: 28px;
    }
    h2 {
      margin: 20px 0 10px;
      font-size: 20px;
    }
  }
`;
