"use client";
import React, { useEffect } from "react";

import useMonerisV2 from "../hooks/useMonerisV2";
import Head from "next/head";
import { env } from "~/env.mjs";
import { type MonerisReceiptResponse } from "../types/moneris";

interface MonerisCardVerificationProps {
  handleReceipt: (data: MonerisReceiptResponse) => void;
  handleCancel?: (data: undefined) => void;
  handleFailure?: (data: undefined) => void;
}

const MonerisCardVerification = ({
  handleReceipt,
}: MonerisCardVerificationProps) => {
  const { monerisResult } = useMonerisV2();

  useEffect(() => {
    if (monerisResult) {
      handleReceipt(monerisResult);
    }
  }, [monerisResult]);

  return (
    <>
      <Head>
        <script src={env.NEXT_PUBLIC_MONERIS_JS_URL} defer />
      </Head>
      <div id="monerisCheckout"></div>
    </>
  );
};

export default MonerisCardVerification;
