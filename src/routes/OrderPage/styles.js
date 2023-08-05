import { css } from "@emotion/css";

export const OrderPageContainer = css`
  margin: 100px 50px 0;
  font-family: PoppinsBold;

  .card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3em 3em;
  }
  .card--container {
    display: flex;
    min-width: 352px;
    min-height: auto;
    padding: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
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
  .wrap--text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px;
    min-height: auto;
  }
  .wrap--btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .plus {
    border: 0;
    min-width: 45px;
    height: 45px;
    border-radius: 10px;
    background-color: #44911f;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: hsl(101, 65%, 30%);
    }
  }
  h1 {
    margin-top: 30px;
    font-family: PoppinsRegular;
  }
  h2 {
    width: 150px;
    font-family: PoppinsRegular;
    margin: 20px 0 10px;
    color: gray;
  }
  span {
    font-family: PoppinsBold;
    color: #44911f;
  }

  @media screen and (max-width: 768px) {
    margin: 130px 25px 0;

    .card {
      display: flex;
      flex-direction: column;
    }
    .card--container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .desc {
      max-width: 300px;
    }
    .image--card {
      min-width: 120px;
    }
    .wrap--text {
      width: 600px;
    }
    .p--title {
      margin: 0px 0;
    }
    .plus {
      margin-left: auto;
      width: 45px;
    }
    h1 {
      margin-top: 10px;
      font-size: 30px;
    }
  }

  @media screen and (max-width: 400px) {
    margin: 110px 25px 0;

    .card {
      display: flex;
      flex-direction: column;
    }
    .card--container {
      display: flex;
      flex-direction: column;
      min-width: 268px;
      min-height: auto;
      padding: 34px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
    }
    .desc {
      margin-bottom: 10px;
    }
    .image--card {
      min-width: 200px;
      min-height: 200px;
    }
    .wrap--text {
      width: 200px;
      justify-content: none;
      padding: 0;
    }
    .p--title {
      margin: 20px 0 0;
      height: auto;
    }
    .plus {
      margin-left: auto;
      width: 45px;
    }
    h1 {
      margin-top: 10px;
      font-size: 30px;
    }
  }
`;
