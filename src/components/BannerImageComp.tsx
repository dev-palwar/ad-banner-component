import React from "react";
import Ad from "./Ad";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface AdProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  buttonText: string;
  image: StaticImport | string;
}

const BannerImageComp: React.FC<AdProps> = (props) => {
  return (
    <React.Fragment>
      <Ad props={props} />
    </React.Fragment>
  );
};

export default BannerImageComp;
