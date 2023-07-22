import { css } from "@emotion/css";

export const productCardContainer = css`
  display: flex;
  flex-direction: column;
  font-family: PoppinsRegular;
  margin: 50px 50px;

  .section--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
  .link {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid black;
  }

  .card--container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 14px;
    /* align-items: flex-start;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      width: 0; Remove scrollbar space 
    } */
  }
  .card {
    width: 268px;
    height: 400px;
    padding: 34px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin-right: 50px;
  }
  .card:last-child {
    margin-right: 0;
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
  .p--desc {
    font-size: 14px;
    color: #7c7c7c;
    margin: 10px 0 0;
  }
  .testing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn {
    margin: auto;
    padding: 50px 0 0;
  }
`;
