import React from "react";
import Ad from "./Ad";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { loadCSSModule } from "@/utils/cssLoader";
import Loader from "./loader";

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
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadStyles = async () => {
      const loadedStyles = await loadCSSModule(props.id);
      setStyles(loadedStyles);
      setLoading(false);
    };
    loadStyles();
  }, [props.id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Ad props={props} styles={styles} />
    </React.Fragment>
  );
};

export default BannerImageComp;
