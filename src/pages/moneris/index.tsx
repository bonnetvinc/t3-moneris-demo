import Head from "next/head";
import React from "react";
import { env } from "~/env.mjs";

import MonerisMco from "~/lib/moneris/components/MonerisMco";

const MonerisRegisterCard = () => {
  return (
    <div>

      <MonerisMco />
    </div>
  );
};

export default MonerisRegisterCard;
