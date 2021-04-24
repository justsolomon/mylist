import React from "react";
import MainLayout from "../components/global/MainLayout";
import AllBoardsContainer from "../containers/AllBoards";

function BoardsPage() {
  return (
    <MainLayout>
      <AllBoardsContainer />
    </MainLayout>
  );
}

export default BoardsPage;
