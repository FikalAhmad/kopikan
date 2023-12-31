import { css } from "@emotion/css";

export const fillBtn = ({ fill }) => {
  return css`
    padding: 5px 12px;
    margin: 0px;
    font-family: PoppinsSemiBold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: 3px solid #44911f;
    background-color: ${fill ? "#44911f" : "transparent"};
    color: ${fill ? "white" : "#44911f"};
    min-width: 85px;
    &:hover {
      border: 3px solid #367619;
      background-color: #367619;
      color: white;
    }
    &:active {
      border: 3px solid #265412;
      background-color: #265412;
    }

    /* Responsive min 320px */
    @media screen and (min-width: 320px) and (max-width: 400px) {
      font-size: 12px;
    }
  `;
};
