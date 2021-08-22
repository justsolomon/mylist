import React from "react";
import { Divider, Grid, VStack } from "@chakra-ui/react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { searchSuccess } from "../../../redux/search/searchActions";
import SearchResultsSection from "./SearchResultsSection";
import updateBoard from "../../../redux/board/update/updateBoardService";
import SearchCardResults from "./SearchCardResults";
import SearchBoardCard from "../../global/Header/SearchBoards/SearchBoardCard";

function SearchResults() {
  const { data } = useSelector((state: RootStateOrAny) => state.search.index);
  const dispatch = useDispatch();

  const starBoard = (id: string, starred: boolean) => {
    //update on client side
    const { boards } = data;
    let boardIndex = boards.findIndex((board: any) => board._id === id);
    boards[boardIndex].starred = !starred;

    let updatedSearch = { ...data, boards };
    dispatch(searchSuccess(updatedSearch));

    //update on server
    dispatch(updateBoard({ starred: !starred }, id));
  };

  return (
    <VStack
      display={data.boards.length || data.todos.length ? "flex" : "none"}
      spacing="4"
    >
      <Divider mt="2" color="gray.700" />
      {data.boards.length ? (
        <SearchResultsSection
          header="BOARDS"
          content={
            <Grid w="100%" templateColumns="repeat(2, 1fr)" gridGap="2">
              {data.boards.map(
                ({ background, title, starred, _id }: any, index: number) => (
                  <SearchBoardCard
                    bg={background}
                    title={title}
                    starred={starred}
                    id={_id}
                    starBoard={() => starBoard(_id, starred)}
                    key={index}
                  />
                )
              )}
            </Grid>
          }
        />
      ) : null}
      {data.todos.length ? (
        <SearchResultsSection
          header="CARDS"
          content={<SearchCardResults cards={data.todos} />}
        />
      ) : null}
    </VStack>
  );
}

export default SearchResults;
