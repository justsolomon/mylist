import React from "react";
import LoginContainer from "../containers/Login";
import AuthModal from "../components/auth/AuthModal";
import SEO from "../components/global/SEO";

function LoginPage() {
  return (
    <AuthModal header="Login to your account" login>
      <SEO
        prefix="Log in"
        path="/login"
        description="Sign in and get right back to organizing your work in visual sections"
      />
      <LoginContainer />
    </AuthModal>
  );
}

export default LoginPage;
