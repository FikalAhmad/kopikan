import { css } from "@emotion/css";

export const cartPageContainer = css`
  font-family: PoppinsRegular;
  margin: 0 50px;
  .table {
    border-collapse: collapse;
    border-top: 1px solid black;
  }
  .table--head {
    border: 1px solid black;
  }
  .table--row {
    text-align: center;
  }
  .table--data {
    width: 20%;
  }
  .table__productname {
    text-align: left;
  }
  .table__image {
    max-width: 100px;
  }
  .btn {
    font-size: 18px;
    min-width: 30px;
    min-height: 30px;
    /* padding: 3px 6px; */
    border: none;
    color: white;
    background-color: green;
  }
  span {
    margin: 0 10px;
  }
`;
