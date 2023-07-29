import { css } from "@emotion/css";

export const ImageGalleryContainer = css`
  position: relative;
  margin: 0 50px;
  padding-top: 50px;
  min-width: 500px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 25px;
  }

  /* RESPONSIVE 576PX */
  @media screen and (max-width: 576px) {
    margin: 0 0;
    display: flex;
    justify-content: center;
  }
`;
