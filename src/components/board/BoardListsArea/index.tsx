import React from "react";
import { HStack } from "@chakra-ui/layout";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BoardList from "../BoardList";
import { useDispatch } from "react-redux";
import { getBoardSuccess } from "../../../redux/board/get/getBoardActions";
import { resetBoardData } from "../../../redux/board/boardActions";
import { updateListPosition } from "../../../redux/list/update/updateListService";
import {
  moveCardToList,
  updateCardPosition,
} from "../../../redux/card/update/updateCardService";

export interface BoardListsAreaProps {
  /** Array of lists */
  lists: any[];

  /** Id of the board */
  boardId: string;

  /** Data contained in a board */
  boardData: any;
}

function BoardListsArea({ lists, boardId, boardData }: BoardListsAreaProps) {
  const dispatch = useDispatch();

  const getItem = (arr: any[], id: string) => {
    let index = arr.findIndex((item) => item._id === id);
    let item = arr[index];

    return [index, item];
  };

  const updateClientBoardData = (boardData: any) => {
    dispatch(getBoardSuccess(boardData));
    dispatch(resetBoardData());
  };

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //update list position
    if (type === "column") {
      const lists = boardData.lists;
      const list = boardData.lists.splice(source.index, 1)[0];

      lists.splice(destination.index, 0, list);
      updateClientBoardData(boardData);

      //update on server
      dispatch(updateListPosition(boardId, list._id, destination.index));

      return;
    }

    // move cards in the same list
    if (source.droppableId === destination.droppableId) {
      const [index, list] = getItem(boardData.lists, source.droppableId);

      //update the index of the dragged card in list todos
      const card = list.todos.splice(source.index, 1)[0];
      list.todos.splice(destination.index, 0, card);

      boardData.lists[index] = list;
      updateClientBoardData(boardData);

      //update on server
      dispatch(updateCardPosition(list._id, card._id, destination.index));

      return;
    }

    /** moving card from one list to another */

    const [, oldList] = getItem(boardData.lists, source.droppableId);
    const [index, newList] = getItem(boardData.lists, destination.droppableId);

    //insert card at index in the new list
    const card = oldList.todos.splice(source.index, 1)[0];
    newList.todos.splice(destination.index, 0, card);

    boardData.lists[index] = newList;
    updateClientBoardData(boardData);

    //update on server
    dispatch(
      moveCardToList(oldList._id, newList._id, card._id, destination.index)
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={boardId} direction="horizontal" type="column">
        {(provided, snapshot) => (
          <>
            <HStack
              align="flex-start"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists.map((list, index) => (
                <BoardList list={list} key={list._id} index={index} />
              ))}
              {provided.placeholder}
            </HStack>
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default BoardListsArea;
