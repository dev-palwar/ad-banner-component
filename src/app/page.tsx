"use client";

import Main from "@/components/Main";
import { AdProvider } from "@/context/AdContext";
import Image from "next/image";
import githubIcon from "../assets/icons/github-logo.png";
import React from "react";

const page = () => {
  return (
    <AdProvider>
      <a
        href="https://github.com/dev-palwar/ad-banner-component"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={githubIcon}
          height={50}
          width={50}
          alt="GitHub"
          className="githubIcon"
        />
      </a>
      <Main />
    </AdProvider>
  );
};

export default page;
