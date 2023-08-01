import { css } from "@emotion/css";

export const TabsContainer = css`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #ccc;
    margin-top: 10px;
    .tab--item-styles {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: PoppinsSemiBold;
      min-width: 50%;
      min-height: 50px;
      padding: 10px 20px;
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-size: 16px;
      color: #333;
      outline: none;
      text-decoration: none;

      &:hover {
        color: #44911f;
        border-bottom: 5px solid #44911f;
      }

      &.active {
        color: #44911f;
        border-bottom: 5px solid #44911f;
      }
    }
  }
  @media screen and (max-width: 400px) {
    margin: 0;
    .tab--item-styles {
      font-size: 14px;
      &:hover {
        border-bottom: 3px solid #44911f;
      }

      &.active {
        color: #44911f;
        border-bottom: 3px solid #44911f;
      }
    }
  }
`;
