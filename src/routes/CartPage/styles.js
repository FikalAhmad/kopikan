import { css } from "@emotion/css";

export const cartPageContainer = css`
  font-family: PoppinsRegular;
  margin: 100px 50px 0;
  .bill {
    display: flex;
    justify-content: space-between;
  }
  .table {
    margin-right: 30px;
    border-collapse: collapse;
    border-top: 1px solid black;
    width: 100%;
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
    color: #44911f;
    &:hover {
      color: white;
      background-color: #367619;
    }
    &:active {
      color: white;
      background-color: #265412;
    }
  }
  .qty {
    font-family: PoppinsSemiBold;
    margin: 0 10px;
    padding: 5px 10px;
    color: white;
    background-color: green;
  }
  .total--bill {
    border: 5px solid #44911f;
    border-radius: 10px;
    font-family: PoppinsRegular;
    min-width: 30vw;
    max-height: 200px;
    padding: 20px;
  }
  .item--total-bill {
    display: flex;
    justify-content: space-between;
  }
  .item--bill {
    font-family: PoppinsSemiBold;
  }
  .bill--btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .cart--empty {
    font-family: PoppinsBold;
    font-size: 32px;
    display: flex;
    justify-content: center;
    color: red;
  }
  .pay-btn {
    padding: 5px 12px;
    margin: 0px;
    font-family: PoppinsSemiBold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: #44911f;
    color: white;
    min-width: 85px;
    &:hover {
      background-color: #367619;
    }
    &:active {
      background-color: #265412;
    }
  }

  @media screen and (max-width: 576px) {
    margin: 130px 25px 0;
    font-size: 12px;
    .bill {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .table {
      margin-right: 0;
      border-collapse: collapse;
      border-top: 1px solid black;
      width: 100%;
    }
    .table--row {
      text-align: center;
    }
    .table--data {
      width: 10%;
    }
    .table__productname {
      text-align: justify;
    }
    .table__image {
      max-width: 80px;
    }
    .btn {
      border: 1px solid black;
      font-size: 14px;
      min-width: 20px;
      min-height: 20px;
      /* padding: 3px 6px; */
      border: none;
    }
    .qty {
      margin: 0;
      font-size: 12px;
      padding: 1px 3px;
    }
    .total--bill {
      margin: 30px 0;
      min-width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    margin: 120px 20px 0;
    font-size: 10px;
    .bill {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .table {
      margin-right: 0;
      border-collapse: collapse;
      border-top: 1px solid black;
      width: 100%;
    }
    .table--row {
      text-align: center;
    }
    .table--data {
      width: 20%;
    }
    .table__productname {
      text-align: justify;
    }
    .table__image {
      max-width: 60px;
    }
    .btn {
      border: 1px solid black;
      font-size: 14px;
      min-width: 20px;
      min-height: 20px;
      /* padding: 3px 6px; */
      border: none;
    }
    .qty {
      margin: 0;
      font-size: 10px;
      padding: 1px 3px;
    }
    .total--bill {
      margin: 30px 0;
      min-width: 100%;
    }
  }
`;
