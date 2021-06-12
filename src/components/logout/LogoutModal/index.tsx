import React, { useState } from "react";
import closePageModal from "../../../utils/ClosePageModal";
import { useHistory, useLocation } from "react-router";
import logout from "../../../utils/Logout";
import ModalSkeleton from "../../global/ModalSkeleton";

function LogoutModal() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const closeModal = () => closePageModal(location, history, "/boards");

  return (
    <ModalSkeleton
      isOpen
      header="Log out of MyList?"
      warning="You can always log back in at any time."
      cta="Log out"
      colorScheme="blue"
      loading={loading}
      onClose={closeModal}
      primaryAction={() => {
        setLoading(true);
        logout();
      }}
    />
  );
}

export default LogoutModal;
