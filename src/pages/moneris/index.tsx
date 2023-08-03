import Head from "next/head";
import React from "react";

import MonerisMco from "~/lib/moneris/MonerisMco";

const MonerisRegisterCard = () => {
  return (
    <div>
      <Head>
        <script src="https://gatewayt.moneris.com/chktv2/js/chkt_v2.00.js" defer></script>
      </Head>
      <MonerisMco />
    </div>
  );
};

export default MonerisRegisterCard;
