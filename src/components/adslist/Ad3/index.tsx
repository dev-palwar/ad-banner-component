import React from "react";
import styles from "../Ad3/index.module.scss";
import { AdProps } from "@/components/BannerImageComp";
import Image from "next/image";
import Modal from "@/components/Modal";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import pencil from "../../../assets/pen.png";

interface Props {
  props: AdProps;
}

const Ad2: React.FC<Props> = ({ props }) => {
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.ad}>
          <div
            className={styles.editIcon}
            onClick={() => setOpenEditModal(!openEditModal)}
          >
            <Image src={pencil} height={100} width={100} alt="edit" />
          </div>
          <div className={styles.textContent}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src={props.image as string}
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className={styles.buttonSection}>
            <button>{props.buttonText}</button>
          </div>
        </div>
      </div>
      <Modal isOpen={openEditModal} onClose={() => setOpenEditModal(false)}>
        <EditBannerTemplateBs id={props.id} />
      </Modal>
    </React.Fragment>
  );
};

export default Ad2;
