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

  .card--container {
    max-width: 268px;
    min-height: 450px;
    padding: 34px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin-right: 50px;
  }

  .card {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 60px 15px;
  }

  .image--card {
    width: 200px;
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
  }
`;
