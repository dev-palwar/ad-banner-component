"use client";
import { AdProps } from "@/components/BannerImageComp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import "../Ad1/index.scss";
import Modal from "@/components/Modal";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";

interface Props {
  props: AdProps;
}

const Ad1: React.FC<Props> = ({ props }) => {
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="container">
        <div className="ad">
          <div
            className="editIcon"
            onClick={() => setOpenEditModal(!openEditModal)}
          >
            edit
          </div>
          <div className="content">
            <div className="textContent">
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </div>
            <div className="imageContent">
              <Image
                src={props.image as StaticImport}
                height={100}
                width={100}
                alt=""
              />
            </div>
          </div>
          <div className="buttonSection">
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

export default Ad1;
