import { css } from "@emotion/css";

export const tentangContainer = css`
  font-family: PoppinsRegular;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  .tentang--image {
    width: 1266px;
    height: 417px;
    margin: auto;
    padding-top: 40px;
    background-image: url("/src/assets/content/coffee-about.png");
    background-size: cover;
    border-radius: 10px;
  }
  .tentang--h1 {
    margin-top: 25px;
  }
  li {
    margin-left: 25px;
  }
  hr {
    margin: 50px 0;
  }
`;
