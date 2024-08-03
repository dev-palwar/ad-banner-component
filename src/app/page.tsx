"use client";

import Main from "@/components/Main";
import { AdProvider } from "@/context/AdContext";
import React from "react";

const page = () => {
  return (
    <AdProvider>
      <Main />
    </AdProvider>
  );
};

export default page;
