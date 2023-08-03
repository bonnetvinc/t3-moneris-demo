"use client";
import React, { useEffect } from "react";

import useMonerisV2 from "./useMonerisV2";
import MonerisResponse from "./MonerisResponse";

const MonerisMco = () => {
  const { monerisIsLoading, monerisResult } = useMonerisV2();

  useEffect(() => {
    if (monerisIsLoading) {
      console.info("moneris loaded");
    }
  }, [monerisIsLoading]);

  if (monerisResult) {
    return <MonerisResponse {...monerisResult} />;
  }

  return (
    <div>
      <p>MCO Module</p>

      {monerisIsLoading && <p>Loading...</p>}

      <div id="monerisCheckout"></div>
    </div>
  );
};

export default MonerisMco;
