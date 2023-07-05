import { css } from "@emotion/css";

export const productCardContainer = css`
  display: flex;
  flex-direction: column;
  width: 268px;
  height: 350px;
  padding: 34px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  /* 
  * {
    border: 1px solid red;
  } */

  .image--card {
    width: 200px;
    border-radius: 5px;
  }

  .p--title {
    font-family: PoppinsSemiBold;
    font-size: 16px;
    margin: 10px 0 0;
  }
  .p--price {
    font-family: PoppinsRegular;
    font-size: 16px;
    color: #7c7c7c;
    margin: 15px 0 0;
  }
  .testing {
    display: flex;
    justify-content: space-between;
  }
  .plus {
    border: 0;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background-color: #44911f;
  }
`;
