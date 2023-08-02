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
    margin: 50px 0 0;
    display: flex;
    justify-content: center;
  }
`;
