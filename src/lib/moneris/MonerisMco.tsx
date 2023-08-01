"use client";
import React, { useEffect } from "react";
import useMoneris from "./useMoneris";
import { env } from "~/env.mjs";

const MonerisMco = () => {
  const { isLoading } = useMoneris();

  console.info("moneris loaded", isLoading);

  useEffect(() => {
    if (isLoading) {
      console.info("moneris loaded");
    }
  }, [isLoading]);

  return (
    <div>
      <p>MCO Module</p>

      {isLoading && <p>Loading...</p>}

      {/* <button onClick={(}>preload</button> */}

      <div id="monerisCheckout"></div>
    </div>
  );
};

export default MonerisMco;
