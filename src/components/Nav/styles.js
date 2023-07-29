import { css } from "@emotion/css";

export const navContainer = css`
  margin: 20px 50px;
  .first--wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list--menu {
    min-width: 300px;
  }
  .ul--menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .burger-icon {
    display: none;
    cursor: pointer;
    z-index: 99;
  }
  .bar {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
  }
  .nav--second {
    display: none;
  }

  /* Responsive 576px */
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 0;
    padding: 15px 25px;
    display: flex;
    align-items: stretch;
    .nav--logo {
      display: flex;
      align-items: center;
      width: 180px;
      height: 37px;
    }
    .logo--image {
      width: 120px;
    }
    .list--menu {
      z-index: 1;
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      justify-content: center;
      align-content: space-around;
    }
    .list--menu.active {
      display: flex;
      min-width: 400px;
      min-height: 850px;
      top: 0;
    }
    .ul--menu {
      min-height: 50vh;
      display: flex;
      flex-direction: column;
    }
    .item--link {
      text-decoration: none;
      color: black;
    }
    .burger-icon {
      display: block;
    }
    .nav--icon {
      display: none;
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
    .nav--second {
      margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
    }
  }

  /* Responsive 320px - 400px */
  @media screen and (max-width: 400px) {
    .nav--logo {
      width: 120px;
    }
    .logo--image {
      width: 100px;
    }
    .list--menu {
      z-index: 1;
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      justify-content: center;
      align-content: space-around;
    }
    .list--menu.active {
      display: flex;
      min-width: 250px;
      min-height: 500px;
    }
    .ul--menu {
      min-height: 50vh;
      display: flex;
      flex-direction: column;
    }
  }
`;
