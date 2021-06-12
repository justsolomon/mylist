import React from "react";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/layout";
import { IUsersInvite } from "../UserTagList";
import { RootStateOrAny, useSelector } from "react-redux";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";

interface IUsersAutocomplete extends IUsersInvite {
  inputActive: boolean;
}

interface IUser {
  _id: string;
  email: string;
  username: string;
  imageUrl: string;
}

function UsersAutocomplete({
  inputActive,
  users,
  setUsers,
}: IUsersAutocomplete) {
  const { data, loading } = useSelector(
    (state: RootStateOrAny) => state.search.users
  );
  const { data: boardData } = useSelector(
    (state: RootStateOrAny) => state.board.index
  );

  const isMember = (email: string) => {
    return boardData.members.find(
      (member: { email: string }) => member.email === email
    );
  };

  return (
    <Box h="200px">
      {inputActive ? (
        data.length ? (
          <VStack
            align="flex-start"
            boxShadow="0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)"
            bgColor="white"
            maxH="150px"
            borderRadius="4px"
            mt="2"
            py="3"
            px="2"
          >
            {loading ? (
              <Center w="100%">
                <Spinner color="blue" />
              </Center>
            ) : (
              data.map((user: IUser) => (
                <HStack
                  w="100%"
                  borderRadius="4px"
                  cursor={
                    isMember(user.email) ||
                    user.email === boardData.userId.email
                      ? "not-allowed"
                      : "pointer"
                  }
                  px="2"
                  py="1"
                  _hover={{ bgColor: "rgba(9,30,66,.04)" }}
                  onClick={() => {
                    if (
                      !users.includes(user.email) &&
                      user.email !== boardData.userId.email &&
                      !isMember(user.email)
                    ) {
                      setUsers([...users, user.email]);
                    }
                  }}
                >
                  <Box
                    boxSize="32px"
                    borderRadius="full"
                    bg="rgba(0, 0, 0, .1)"
                  >
                    <Image
                      src={user.imageUrl}
                      objectFit="cover"
                      borderRadius="full"
                      zIndex="1"
                    />
                  </Box>
                  <VStack fontSize="sm" align="flex-start" spacing="0">
                    <Text>{user.email}</Text>
                    <Text color="gray.300">{`@${user.username}`}</Text>
                  </VStack>
                </HStack>
              ))
            )}
          </VStack>
        ) : (
          <Center
            p="4"
            bgColor="gray.50"
            boxShadow="0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)"
            borderRadius="4px"
            mt="2"
          >
            <Text fontSize="15px" color="gray.400">
              Looks like that person isn't a MyList member yet. Only members can
              be invited to boards.
            </Text>
          </Center>
        )
      ) : null}
    </Box>
  );
}

export default UsersAutocomplete;
