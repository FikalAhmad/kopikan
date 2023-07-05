import { css } from "@emotion/css";

export const navContainer = css`
  display: flex;
  width: 1366px;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

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

  .nav--button {
    display: flex;
    width: 519px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
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
