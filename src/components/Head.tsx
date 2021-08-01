import React from "react";

import NextHead from "next/head";

interface OwnProps {
  title?: string;
  description?: string;
}

export const Head = ({ title, description }: OwnProps) => (
  <NextHead>
    <title>{title || "Garage Sale"}</title>
    <meta
      name="description"
      content={description || "Garage Sale"}
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);
