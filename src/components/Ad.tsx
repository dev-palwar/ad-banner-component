"use client";
import { AdProps } from "@/components/BannerImageComp";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import pencil from "../assets/pencil-24.png";

interface Props {
  props: AdProps;
  styles: Record<string, string>;
}

const Ad: React.FC<Props> = ({ props, styles }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

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
          <div className={styles.content}>
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

export default Ad;
