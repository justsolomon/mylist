import React from "react";
import SEO from "../../components/global/SEO";
import AcceptBoardInviteContainer from "../../containers/AcceptBoardInvite";

function AcceptBoardInvitePage() {
  return (
    <>
      <SEO
        prefix="Accept invite"
        path="/board/accept-invite"
        description="Accept Board invite"
      />
      <AcceptBoardInviteContainer />
    </>
  );
}

export default AcceptBoardInvitePage;
