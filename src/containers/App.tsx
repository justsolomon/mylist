import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/CustomTheme";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "focus-visible/dist/focus-visible";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Routes from "./Routes";
import useStorage from "../hooks/useStorage";
import { refreshTokenRequest } from "../redux/middleware/refreshTokenMiddleware";

//lazy load pages
// const LandingPage = lazy(() => import("../pages/landing"));
const LoginModal = lazy(() => import("../pages/login"));
const SignupModal = lazy(() => import("../pages/signup"));
const ForgotPasswordModal = lazy(() => import("../pages/forgot-password"));
const ResetPasswordModal = lazy(() => import("../pages/reset-password"));

function App() {
  const { getStorageValue } = useStorage();
  const { data } = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //clear sessionstorage after refresh
    window.onunload = () => sessionStorage.clear();

    //refresh token when user enters app
    if (getStorageValue("loggedIn") && !data.jwt) refreshTokenRequest(dispatch);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}

export default App;

//<a href='https://www.freepik.com/vectors/calendar'>Calendar vector created by vectorjuice - www.freepik.com</a>
