import React from "react";
import ResponsiveDrawer from "~/components/drawer-layout/ResponsiveDrawerLayout";
import LedgerBook from "~/components/ledger-book/LedgerBook";

const index = () => {
  return (
    <ResponsiveDrawer title="Ledger">
      <LedgerBook />
    </ResponsiveDrawer>
  );
};

export default index;
