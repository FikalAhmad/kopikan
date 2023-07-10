import { css } from "@emotion/css";

export const loginContainer = css`
  font-family: PoppinsRegular;
  margin: 0 50px;
  .logo {
    width: 150px;
    height: 37px;
    margin-top: 20px;
  }
  .login--container {
    margin: auto;
    width: 500px;
  }
  h1 {
    margin: 80px auto 0;
  }
  p {
    color: gray;
    margin: 0 auto 30px;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 500px;
  }
  .form--label {
    display: flex;
    flex-direction: column;
  }
  .form--input {
    padding: 10px 10px;
    font-family: PoppinsRegular;
    font-size: 16px;
    margin: 5px 0 25px;
    border: 1px solid black;
    border-radius: 8px;
  }
  .form--submit {
    font-family: PoppinsSemiBold;
    font-size: 16px;
    padding: 7px 0;
    margin-top: 15px;
    background-color: #44911f;
    border: none;
    color: white;
    cursor: pointer;
  }
  .p--daftar {
    text-align: center;
    margin-top: 10px;
  }
  .p--link {
    font-family: PoppinsSemiBold;
    color: #44911f;
  }
`;
