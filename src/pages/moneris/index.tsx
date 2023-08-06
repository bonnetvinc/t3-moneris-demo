import Head from "next/head";
import React from "react";
import { env } from "~/env.mjs";

import MonerisMco from "~/lib/moneris/components/MonerisMco";

const MonerisRegisterCard = () => {
  return (
    <div>
      <Head>
        <script src={env.NEXT_PUBLIC_MONERIS_JS_URL} defer />
      </Head>
      <MonerisMco />
    </div>
  );
};

export default MonerisRegisterCard;
