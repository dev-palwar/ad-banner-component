import Image from "next/image";
import React, { useState, useEffect } from "react";
import demoImage from "../assets/jarritos-mexican-soda-KPCHBTO8oGM-unsplash.jpg";
import styles from "../styles/EditBannerTemplateBs.module.scss";
import { AdProps } from "./BannerImageComp";
import { useAdContext } from "@/context/AdContext";
import img1 from "../assets/jarritos-mexican-soda-KPCHBTO8oGM-unsplash.jpg";
import img2 from "../assets/ignazio-di-gangi-rPJ8tb3xzfk-unsplash.jpg";
import img3 from "../assets/nice-m-nshuti-q0iwZZHfBJ0-unsplash.jpg";

const EditBannerTemplateBs = ({ id }: { id: number }) => {
  const { data, setData } = useAdContext();
  const [formData, setFormData] = useState<AdProps>({
    id,
    title: "",
    description: "",
    buttonText: "",
    cta: "",
  });

  useEffect(() => {
    const currentData = data.find((item) => item.id === id);
    if (currentData) {
      setFormData(currentData);
    }
  }, [id, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...formData } : item))
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <Image src={demoImage} width={100} height={100} alt="Banner Image" />
      </div>

      <div className={styles.imageSelectionMenu}>
        <p>Images</p>
        <div className={styles.images}>
          <div>
            <Image src={img1} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={img1} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={img1} alt="" height={100} width={100} />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Description</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Button Text</p>
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonSection}>
          <button type="submit">Done</button>
        </div>
      </form>
    </div>
  );
};

export default EditBannerTemplateBs;
