import { css } from "@emotion/css";

export const ImageGalleryContainer = css`
  position: relative;
  margin: 80px 50px 0;
  padding-top: 50px;
  min-width: 500px;
  img {
    width: 100%;
  }

  /* RESPONSIVE 576PX */
  @media screen and (max-width: 576px) {
    margin: 70px 0 0;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 400px) {
    margin: 60px 0 0;
    display: flex;
    justify-content: center;
  }
`;
