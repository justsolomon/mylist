import React from "react";
import AuthModal from "../components/auth/AuthModal";
import ForgotPasswordContainer from "../containers/ForgotPassword";

function ForgotPasswordPage() {
  return (
    <AuthModal
      header="Reset your password"
      subHeading="To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process."
    >
      <ForgotPasswordContainer />
    </AuthModal>
  );
}

export default ForgotPasswordPage;
