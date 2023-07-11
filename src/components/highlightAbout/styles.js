import { css } from "@emotion/css";

export const HAContainer = css`
  display: flex;
  margin: 0 50px;
  padding-top: 100px;
  font-family: PoppinsRegular;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    padding-right: 50px;
    text-align: justify;
    margin-bottom: 20px;
  }
  .button--readmore {
    font-family: PoppinsSemiBold;
    background-color: #44911f;
    color: white;
    border-radius: 8px;
    border: none;
    padding: 10px 30px;
    &:hover {
      background-color: black;
    }
  }
  img {
    border-radius: 15px;
  }
`;
