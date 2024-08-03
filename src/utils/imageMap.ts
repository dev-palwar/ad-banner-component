import { StaticImport } from "next/dist/shared/lib/get-img-props";
import demoImage from "../assets/jarritos-mexican-soda-KPCHBTO8oGM-unsplash.jpg";
import demoImage2 from "../assets/square.png";

export const imageMap: Record<number, StaticImport> = {
  1: demoImage,
  2: demoImage2,
};
