import React from "react";
import Ad1 from "./adslist/Ad1/index";
import Ad2 from "./adslist/Ad2/index";
import Ad3 from "./adslist/Ad3/index";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface AdProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  buttonText: string;
  image?: StaticImport | string;
}

const componentMap: { [key: number]: React.FC<any> } = {
  1: Ad1,
  2: Ad2,
  3: Ad3,
};

const BannerImageComp: React.FC<AdProps> = (props) => {
  const ComponentToRender =
    componentMap[props.id] || (() => <div>Component not found</div>);

  return <ComponentToRender props={props} />;
};

export default BannerImageComp;
