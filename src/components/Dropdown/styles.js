import { css } from "@emotion/css";

export const dropdownContainer = css`
  position: relative;

  .dropdown-toggle {
    cursor: pointer;
    background-color: #44911f;
    border: 2px solid green;
    border-radius: 10px;
    padding: 3px 10px;
    color: white;
    min-width: auto;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: -25px;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    z-index: 1;
    /* display: none; */
  }

  .dropdown-menu {
    display: block;
  }
  .icon {
    min-width: 25px;
  }
  .icon--btn img {
    display: flex;
    align-items: center;
  }
  .icon--btn {
    background-color: transparent;
    border: none;
    font-family: PoppinsSemiBold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-item {
    font-family: PoppinsSemiBold;
    cursor: pointer;
    background: white;
    min-width: 100px;
    border: none;
    padding: 15px 15px;
    &:hover {
      background: #f5f5f5;
    }
  }
`;
