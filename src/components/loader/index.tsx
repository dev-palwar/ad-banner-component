import React from "react";
import styles from "./index.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
