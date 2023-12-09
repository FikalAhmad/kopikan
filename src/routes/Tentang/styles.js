import { css } from "@emotion/css";
import CoffeeAbout from "/src/assets/content/coffee-about.png";

export const tentangContainer = css`
  font-family: PoppinsRegular;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin: 100px 50px 0;
  text-align: justify;
  .tentang--image {
    min-width: 100%;
    height: 417px;
    margin: 30px auto 0;
    background-image: url(${CoffeeAbout});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -100px;
    border-radius: 10px;
  }
  .tentang--h1 {
    margin-top: 25px;
  }
  li {
    list-style-type: lower;
    margin-left: 30px;
  }
  hr {
    margin: 50px 0;
  }
  h2 {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  /* Responsive 768px */
  @media screen and (max-width: 768px) {
    margin: 80px 25px 0;
    .tentang--image {
      background-position: -100px;
    }
  }
  /* Responsive 768px */
  @media screen and (max-width: 576px) {
    font-size: 14px;
    .tentang--h1 {
    }
  }
`;
