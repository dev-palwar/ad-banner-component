import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import crossIcon from "../../assets/cross.png";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={crossIcon} width={100} height={100} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
