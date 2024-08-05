import BannerImageComp, { AdProps } from "@/components/BannerImageComp";
import React from "react";
import Slider from "@/components/Slider";
import { useAdContext } from "@/context/AdContext";

const Main = () => {
  const { data } = useAdContext();

  // todo - code structure and image
  // todo - remove comments

  return (
    <Slider>
      {data.map((obj: AdProps) => (
        <BannerImageComp
          key={obj.id}
          id={obj.id}
          title={obj.title}
          description={obj.description}
          buttonText={obj.buttonText}
          cta={obj.cta}
          image={obj.image}
        />
      ))}
    </Slider>
  );
};

export default Main;
