import { css } from "@emotion/css";

export const fillBtn = ({ fill }) => {
  return css`
    width: 100px;
    margin: 20px;
    height: 34px;
    font-family: PoppinsSemiBold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: ${fill ? "none" : "3px solid #44911f"};
    background-color: ${fill ? "#44911f" : "transparent"};
    color: ${fill ? "white" : "#44911f"};
  `;
};
