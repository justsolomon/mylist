import React from "react";
import SEO from "../components/global/SEO";
import LogoutModal from "../components/logout/LogoutModal";

function LogoutPage() {
  return (
    <>
      <SEO prefix="Log out" path="/logout" />
      <LogoutModal />
    </>
  );
}

export default LogoutPage;
