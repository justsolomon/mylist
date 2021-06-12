import React from "react";
import MainLayout from "../components/global/MainLayout";
import SEO from "../components/global/SEO";
import AllBoardsContainer from "../containers/AllBoards";

function BoardsPage() {
  return (
    <MainLayout>
      <SEO prefix="All boards" path="/boards" />
      <AllBoardsContainer />
    </MainLayout>
  );
}

export default BoardsPage;
