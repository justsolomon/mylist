import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from "react-router";
import Icon from "@chakra-ui/icon";
import { Draggable } from "react-beautiful-dnd";

interface ListCardProps {
  /** Title of the card */
  title: string;

  /** Id of the card */
  id: string;

  /** Index of the card */
  index: number;

  /** Boolean showing whether the card has a description or not */
  hasDescription: boolean;
}

function ListCard({ title, id, index, hasDescription }: ListCardProps) {
  const history = useHistory();
  //@ts-ignore
  const { id: boardId } = useParams();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Box
          w="100%"
          bg={snapshot.isDragging ? "gray.100" : "#fff"}
          p="2"
          borderRadius="4px"
          cursor="pointer"
          color="gray.700"
          boxShadow="0 1px 0 rgb(9 30 66 / 25%)"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          _hover={{ bg: "#f4f5f7", cursor: "pointer" }}
          onClick={() => history.push(`/card/${boardId}/${id}`)}
        >
          <Text fontSize="sm" whiteSpace="normal">
            {title}
          </Text>
          {hasDescription && (
            <Icon boxSize="12px">
              <FontAwesomeIcon icon={faAlignLeft} />
            </Icon>
          )}
        </Box>
      )}
    </Draggable>
  );
}

export default React.memo(ListCard);
