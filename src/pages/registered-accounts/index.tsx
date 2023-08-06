import React from "react";
import ResponsiveDrawer from "~/components/drawer-layout/ResponsiveDrawerLayout";
import RegisterdCards from "~/components/registerd-cards/RegisterdCards";

const index = () => {
  return (
    <>

      <ResponsiveDrawer title="Registerd Accounts">
        <RegisterdCards />
      </ResponsiveDrawer>
    </>
  );
};

export default index;
