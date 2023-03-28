"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-right" />

      <ThemeProvider enableSystem={true} attribute={"class"}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default ClientProvider;
