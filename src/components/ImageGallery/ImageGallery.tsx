import { FC } from "react";
import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
  // (image: Image): void
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((item) => (
        <li
          className={s.imageCard}
          key={item.id}
          id={`${item.id}`}
        // onClick={() => openModal(item)}
        >
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
