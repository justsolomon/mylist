import React from "react";
import AuthModal from "../components/auth/AuthModal";
import ResetPasswordContainer from "../containers/ResetPassword";

function ResetPasswordPage() {
  return (
    <AuthModal
      header="Create a new password"
      subHeading="Enter your new password. After confirming, you will be asked to log in again."
    >
      <ResetPasswordContainer />
    </AuthModal>
  );
}

export default ResetPasswordPage;
