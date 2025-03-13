import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { FC } from "react";

Modal.setAppElement("#root");

interface Image {
  urls: { regular: string };
  alt_description?: string;
}

interface ImageModalProps {
  handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  selectedImage: Image | null;
}

// interface ModalClickProps {
//   handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
// }


const ImageModal: FC<ImageModalProps> = ({
  // handleOverlayClick,
  modalIsOpen,
  closeModal,
  selectedImage,
}: ImageModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      background: "transparent",
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
      // onClick={handleOverlayClick}
      >
        {selectedImage && (
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
            className={s.modalImage}
          />
        )}
      </Modal>
    </>
  );
}
export default ImageModal;
