import { css } from "@emotion/css";

export const registerContainer = css`
  font-family: PoppinsRegular;
  margin: 20px 50px 0;
  .nav--back {
    display: flex;
    justify-content: space-between;
  }
  .link--back {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
  }
  .logo {
    max-width: 150px;
    max-height: auto;
  }
  .daftar--container {
    margin: auto;
    min-width: 100px;
    max-width: 600px;
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
    width: 100%;
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
    border-radius: 8px;
    cursor: pointer;
  }
  .p--daftar {
    text-align: center;
    margin: 10px 0 100px;
  }
  .p--link {
    font-family: PoppinsSemiBold;
    color: #44911f;
    margin-left: 5px;
  }

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    margin: 20px 25px 0;
    .nav--back {
      display: flex;
      justify-content: space-between;
    }
    .link--back {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
    }
    .logo {
      max-width: 130px;
      max-height: 35px;
    }
    h1 {
      margin: 50px auto 0;
    }
    p {
      margin: 0 auto 20px;
    }
    .p--daftar {
      margin: 15px auto 0;
    }

    /* Responsive 320px - 400px */
    @media screen and (max-width: 400px) {
      margin: 20px 20px 0;
      .nav--back {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .link--back {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
      }
      .logo {
        max-width: 100px;
        max-height: 25px;
      }
      h1 {
        margin: 40px auto 0;
      }
    }
  }
`;
