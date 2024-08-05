import React from "react";
import Ad from "./Ad";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { loadCSSModule } from "@/utils/cssLoader";

export interface AdProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  buttonText: string;
  image: StaticImport | string;
}

const BannerImageComp: React.FC<AdProps> = (props) => {
  const [styles, setStyles] = React.useState<any>({});

  React.useEffect(() => {
    const loadStyles = async () => {
      const loadedStyles = await loadCSSModule(props.id);
      setStyles(loadedStyles);
    };
    loadStyles();
  }, [props.id]);

  return (
    <React.Fragment>
      <Ad props={props} styles={styles} />
    </React.Fragment>
  );
};

export default BannerImageComp;
