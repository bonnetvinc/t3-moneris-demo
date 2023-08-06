"use client";
import React, { useEffect } from "react";

import useMonerisV2 from "../hooks/useMonerisV2";
import MonerisResponse from "./MonerisResponse";

const MonerisMco = () => {
  const { monerisResult } = useMonerisV2();


  if (monerisResult) {
    return <MonerisResponse {...monerisResult} />;
  }

  return (
    <div>
      <p>MCO Module</p>

      <div id="monerisCheckout"></div>
    </div>
  );
};

export default MonerisMco;
