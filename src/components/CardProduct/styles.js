import { css } from "@emotion/css";

export const CardContainer = css`
  display: flex;
  width: 352px;
  height: 246px;
  padding: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  /* * {
    border: 1px solid red;
  } */

  .image--card {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }

  .p--title {
    font-family: PoppinsSemiBold;
    font-size: 16px;
    height: 50px;
    margin: 10px 0;
  }
  .desc {
    font-family: PoppinsRegular;
    font-size: 12px;
    margin-bottom: 30px;
  }
  .p--price {
    font-family: PoppinsRegular;
    font-size: 16px;
    color: #7c7c7c;
  }
  .testing {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 16px;
  }
  .testing2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .plus {
    border: 0;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background-color: #44911f;
  }
`;
