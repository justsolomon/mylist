import React, { useState } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import BoardListHeader from "./BoardListHeader";
import AddCardContainer from "../../../containers/AddCardContainer";
import ListCard from "../ListCard";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface BoardListProps {
  /** Data contained in a list */
  list: any;

  /** Index of the list */
  index: number;
}

function BoardList({ list, index }: BoardListProps) {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <Draggable draggableId={list._id} index={index}>
      {(provided, snapshot) => (
        <Box
          w="270px"
          d="inline-block"
          ref={provided.innerRef}
          style={{ scrollSnapAlign: "center" }}
          {...provided.draggableProps}
        >
          <Box {...provided.dragHandleProps}>
            <BoardListHeader
              title={list.title}
              id={list._id}
              isDragging={snapshot.isDragging}
              showForm={() => setFormVisible(true)}
            />
          </Box>

          <Droppable droppableId={list._id}>
            {(provided, snapshot) => (
              <VStack
                align="flex-start"
                px="2"
                pb="2"
                borderBottomRadius="4px"
                bg={
                  snapshot.isDraggingOver ? "rgba(235,236,240,.9)" : "#EBECF0"
                }
                ref={provided.innerRef}
                {...provided.droppableProps}
                mb={list.todos?.length && "2"}
                pt={list.todos?.length && "1"}
              >
                {list.todos?.map((todo: any, index: number) => (
                  <ListCard
                    title={todo.title}
                    key={todo._id}
                    id={todo._id}
                    index={index}
                    hasDescription={todo.description}
                  />
                ))}
                {provided.placeholder}
                <AddCardContainer
                  cards={list.todos}
                  listId={list._id}
                  formVisible={formVisible}
                  setFormVisible={setFormVisible}
                />
              </VStack>
            )}
          </Droppable>
        </Box>
      )}
    </Draggable>
  );
}

export default React.memo(BoardList);
