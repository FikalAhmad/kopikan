import { css } from "@emotion/css";

export const NotFoundContainer = css`
  background-color: #44911f;
  height: 105vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  .illustration {
    max-width: 500px;
    height: auto;

    &--gambar {
      max-width: 500px;
    }
  }
  .btn {
    font-family: PoppinsSemiBold;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    background-color: white;
    padding: 20px 80px;
    cursor: pointer;
  }
  .logo {
    margin-top: 10px;
    width: 80px;
  }
`;
