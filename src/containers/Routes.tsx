import React, { useEffect, useState } from "react";
import { matchPath, Route, Switch, useLocation } from "react-router";
import useStorage, { getStorageValue } from "../hooks/useStorage";
import BoardsPage from "../pages/all-boards";
import BoardPage from "../pages/board";
import AcceptBoardInvitePage from "../pages/board/accept-invite";
import CreateBoardPage from "../pages/board/create";
import CardPage from "../pages/card";
import ForgotPasswordPage from "../pages/forgot-password";
import LandingPage from "../pages/landing";
import LoginPage from "../pages/login";
import LogoutPage from "../pages/logout";
import ResetPasswordPage from "../pages/reset-password";
import SearchPage from "../pages/search";
import SignupPage from "../pages/signup";
import isPageModal from "../utils/IsPageModal";

function Routes() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const { updateFirstPageValue, checkIfFirstPage } = useStorage();

  //update current path if it's a list card modal
  const { pathname } = location;
  let currentPath = pathname.startsWith("/card")
    ? pathname.slice(0, 5)
    : pathname;

  //to get board id if it's a list card modal
  let boardId: string;
  if (currentPath === "/card") {
    let path = matchPath(pathname, {
      path: "/card/:boardId/:cardId",
      exact: true,
      strict: true,
    });

    //@ts-ignore
    boardId = path.params.boardId;
  }

  useEffect(() => {
    if (!isPageModal(currentPath)) {
      setPrevLocation(location);
    } else {
      //in case of a hard reload or first page
      if (checkIfFirstPage()) {
        //set previous path to board page if modal is a list card
        let prevPath =
          currentPath === "/card" ? `/board/${boardId}` : "/boards";

        //set previous location to a general path
        setPrevLocation({
          ...location,
          pathname: getStorageValue("loggedIn") ? prevPath : "/",
        });

        //set return path in current location state
        location.state = {
          returnPath: getStorageValue("loggedIn") ? prevPath : "/",
        };
      }
    }
    updateFirstPageValue();
  }, [location]);

  const isModal = isPageModal(currentPath) && prevLocation !== location;

  const renderPageModal = (path: string) => {
    switch (path) {
      case "/login":
        return <Route path="/login" component={LoginPage} />;
      case "/signup":
        return <Route path="/signup" component={SignupPage} />;
      case "/forgot-password":
        return <Route path="/forgot-password" component={ForgotPasswordPage} />;
      case "/reset-password":
        return <Route path="/reset-password" component={ResetPasswordPage} />;
      case "/create":
        return <Route path="/create" component={CreateBoardPage} />;
      case "/search":
        return <Route path="/search" component={SearchPage} />;
      case "/logout":
        return <Route path="/logout" component={LogoutPage} />;
      case "/card":
        return <Route path="/card/:boardId/:cardId" component={CardPage} />;
    }
  };

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <>
      <Switch location={isModal ? prevLocation : location}>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/board/accept-invite/:memberId/:boardId/:boardName/:firstName"
          component={AcceptBoardInvitePage}
        />
        <Route path="/board/:id" component={BoardPage} />
        <Route path="/boards" component={BoardsPage} />
      </Switch>
      {isModal && renderPageModal(currentPath)}
    </>
  );
  {
    /* </Suspense> */
  }
}

export default Routes;
