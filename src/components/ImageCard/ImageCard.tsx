import { FC } from "react";
import { Image } from "../../types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  item: Image;
  openModal: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={s.galleryItem}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item)}
      />
    </div>
  );
}
export default ImageCard;
