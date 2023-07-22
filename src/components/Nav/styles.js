import { css } from "@emotion/css";

export const navContainer = css`
  display: flex;
  margin: 20px 50px;
  justify-content: space-between;
  align-items: center;
  .list--menu {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }

  li {
    list-style-type: none;
    font-family: PoppinsSemiBold;
    font-size: 16px;
  }

  .item--link {
    text-decoration: none;
    color: black;
  }

  .nav--logo {
    align-items: center;
    width: 150px;
    height: 37px;
  }

  .logo--image {
    width: 150px;
    height: auto;
  }
  .nav--icon {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
  }
  .icon--btn {
    background-color: transparent;
    border: none;
    font-family: PoppinsSemiBold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon--btn img {
    display: flex;
    align-items: center;
  }
  .icon__btn {
    display: flex;
    justify-content: space-between;
    background-color: #44911f;
    border: 2px solid green;
    border-radius: 10px;
    padding: 3px 10px;
    color: white;
    min-width: auto;
  }
  .icon {
    min-width: 25px;
  }
  .link-btn {
    display: relative;
  }
  .badge {
    position: absolute;
    top: 10px;
    right: 220px;
    background-color: red;
    color: white;
    border-radius: 50px;
    padding: 3px 6px;
  }
  .nav--button {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
  }

  .button--item {
    width: 100px;
    margin: 20px;
    height: 34px;
    color: white;
    font-family: PoppinsSemiBold;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }
`;
