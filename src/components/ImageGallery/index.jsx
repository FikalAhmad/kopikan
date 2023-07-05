import { useState, useEffect, useCallback } from "react";
import imagegallery1 from "/src/assets/content/image-gallery1.png";
import imagegallery2 from "/src/assets/content/image-gallery.png";
import { ImageGalleryContainer } from "./styles";

export const ImageGallery = () => {
  const images = [imagegallery1, imagegallery2];
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  // const previousImage = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage === 0 ? images.length - 1 : prevImage - 1
  //   );
  // };

  return (
    <div>
      <div className={ImageGalleryContainer}>
        <img src={images[currentImage]} alt="" />
      </div>
    </div>
  );
};

export default ImageGallery;
