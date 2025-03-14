import { FC } from "react";
import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageCardProps {
  images: Image[];
  openModal: () => void;
  // (image: Image): void
}

const ImageGallery: FC<ImageCardProps> = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((item) => (
        <li
          className={s.imageCard}
          key={item.id}
          id={item.id}
        // onClick={() => openModal(item)}
        >
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
