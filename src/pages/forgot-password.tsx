import React from "react";
import AuthModal from "../components/auth/AuthModal";
import SEO from "../components/global/SEO";
import ForgotPasswordContainer from "../containers/ForgotPassword";

function ForgotPasswordPage() {
  return (
    <AuthModal
      header="Reset your password"
      subHeading="To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process."
    >
      <SEO prefix="Forgot password" path="/forgot-password" />
      <ForgotPasswordContainer />
    </AuthModal>
  );
}

export default ForgotPasswordPage;
