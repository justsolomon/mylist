import React from "react";
import LoginContainer from "../containers/Login";
import AuthModal from "../components/auth/AuthModal";

function LoginPage() {
  return (
    <AuthModal header="Login to your account" login>
      <LoginContainer />
    </AuthModal>
  );
}

export default LoginPage;
