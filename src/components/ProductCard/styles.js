import { css } from "@emotion/css";

export const productCardContainer = css`
  display: flex;
  flex-direction: column;
  font-family: PoppinsRegular;
  margin: 50px;

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
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 3em 3em;
  }
  .card {
    min-width: 268px;
    height: auto;
    padding: 34px;
    border: 1px solid #d9d9d9;
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

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    margin: 40px 25px;
  }
`;
