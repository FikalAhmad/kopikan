import { css } from "@emotion/css";

export const ToasterContainer = css`
  position: fixed;
  bottom: 50px;
  left: 85%;
  transform: translateX(-50%);
  background-color: #44911f;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  min-width: 300px;
  display: flex;

  .toaster-message {
    margin-right: 10px;
  }

  .toaster-close {
    margin-left: auto;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    left: 70%;
    min-width: 250px;
  }
  @media screen and (max-width: 400px) {
    left: 60%;
    bottom: 20px;
    min-width: 250px;
  }
`;
