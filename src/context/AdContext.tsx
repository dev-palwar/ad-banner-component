import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AdProps } from "@/components/BannerImageComp";
import JsonData from "../data/index.json";

interface AdContextProps {
  data: AdProps[];
  setData: React.Dispatch<React.SetStateAction<AdProps[]>>;
}

const AdContext = createContext<AdContextProps | undefined>(undefined);

export const AdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AdProps[]>([]);

  useEffect(() => {
    setData(JsonData);
  }, []);

  return (
    <AdContext.Provider value={{ data, setData }}>
      {children}
    </AdContext.Provider>
  );
};

export const useAdContext = (): AdContextProps => {
  const context = useContext(AdContext);
  if (context === undefined) {
    throw new Error(
      "wrap your component where you want to use this hook with AdProvider"
    );
  }
  return context;
};
