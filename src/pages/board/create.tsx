import React from "react";
import SEO from "../../components/global/SEO";
import CreateBoardContainer from "../../containers/CreateBoard";

function CreateBoardPage() {
  return (
    <>
      <SEO
        prefix="Create board"
        path="/board/create"
        description="Create a new board to organize your todos/tasks in lists"
      />
      <CreateBoardContainer />
    </>
  );
}

export default CreateBoardPage;
