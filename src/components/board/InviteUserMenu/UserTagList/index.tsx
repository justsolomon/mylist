import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";

export interface IUsersInvite {
  users: string[];
  setUsers: (users: string[]) => void;
}

function UserTagList({ users, setUsers }: IUsersInvite) {
  return (
    <HStack wrap="wrap" pt="2">
      {users.map((user, index) => (
        <Tag
          size="md"
          borderRadius="4px"
          variant="solid"
          ml={index === 0 ? "2" : "0"}
          mb="8px !important"
          bgColor="rgba(9,30,66,.04)"
          key={index}
        >
          <TagLabel color="black">{user}</TagLabel>
          <TagCloseButton
            color="black"
            onClick={() => {
              let newUsers = users;
              newUsers.splice(index, 1);
              console.log(newUsers);
              setUsers(newUsers);
            }}
          />
        </Tag>
      ))}
    </HStack>
  );
}

export default UserTagList;
