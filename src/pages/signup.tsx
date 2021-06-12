import React from "react";
import SignupContainer from "../containers/Signup";
import AuthModal from "../components/auth/AuthModal";
import SEO from "../components/global/SEO";

function SignupPage() {
  return (
    <AuthModal header="Create a new account">
      <SEO
        prefix="Sign up"
        path="/signup"
        description="Join MyList now to start organizing your work in visual sections"
      />
      <SignupContainer />
    </AuthModal>
  );
}

export default SignupPage;
