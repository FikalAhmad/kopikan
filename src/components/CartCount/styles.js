import { css } from "@emotion/css";

export const CartCountContainer = css`
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
    min-height: 38px;
    &:hover {
      background-color: hsl(101, 65%, 30%);
    }
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
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
