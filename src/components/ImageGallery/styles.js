import { css } from "@emotion/css";

export const ImageGalleryContainer = css`
  position: relative;
  margin: 0 50px;
  padding-top: 50px;

  /* RESPONSIVE 576PX */
  @media screen and (max-width: 576px) {
    margin: 0 25px;
    img {
      max-width: 380px;
    }
  }
`;
