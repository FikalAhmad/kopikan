import { css } from "@emotion/css";

export const ProfileContainer = css`
  font-family: PoppinsRegular;
  margin: 100px 50px 0;

  .profile--wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 50px;
  }
  .side {
    &--left {
    }
    &--right {
    }
  }
  .p {
    &--title {
      font-family: PoppinsSemiBold;
      font-size: 18px;
    }
    &--desc {
      color: gray;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 120px;
  }
  .input {
    &--text {
      min-width: 700px;
      padding: 15px 15px;
      font-size: 18px;
      border-radius: 8px;
    }
  }
  .btn--wrap {
    display: flex;
    min-width: 250px;
    justify-content: space-between;
  }
  .submit--btn {
    padding: 5px 12px;
    font-family: PoppinsSemiBold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: 3px solid #44911f;
    background-color: #44911f;
    color: white;
    max-width: 250px;
    &:hover {
      background-color: #367619;
      border: 3px solid #367619;
    }
    &:active {
      border: 3px solid #265412;
      background-color: #265412;
    }
    &_stroke {
      padding: 5px 12px;
      font-family: PoppinsSemiBold;
      font-size: 16px;
      cursor: pointer;
      border-radius: 8px;
      border: 3px solid #44911f;
      background-color: white;
      color: #44911f;
      max-width: 250px;
      &:hover {
        background-color: #44911f;
        color: white;
      }
      &:active {
        background-color: #367619;
      }
    }
  }
`;
