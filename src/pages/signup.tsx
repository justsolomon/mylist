import React from "react";
import SignupContainer from "../containers/Signup";
import AuthModal from "../components/auth/AuthModal";

function SignupPage() {
  return (
    <AuthModal header="Create a new account">
      <SignupContainer />
    </AuthModal>
  );
}

export default SignupPage;
