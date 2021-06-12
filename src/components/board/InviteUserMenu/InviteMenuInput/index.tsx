import React from "react";
import { Input } from "@chakra-ui/input";
import { useDispatch } from "react-redux";
import searchUsers from "../../../../redux/search/users/searchUsersService";
import { searchUsersSuccess } from "../../../../redux/search/users/searchUsersActions";

interface IMenuInput {
  setInputActive: (active: boolean) => void;
}

function InviteMenuInput({ setInputActive }: IMenuInput) {
  const dispatch = useDispatch();

  return (
    <Input
      type="text"
      autoFocus
      p="0"
      size="sm"
      border="none"
      _focus={{ border: "none" }}
      w="150px"
      fontSize="15px"
      onChange={(e) => {
        let value = e.target.value.trim();

        if (value === "") setInputActive(false);
        else setInputActive(true);

        if (value.length > 2) dispatch(searchUsers(value));
        else dispatch(searchUsersSuccess([]));
      }}
      autoComplete="off"
    />
  );
}

export default InviteMenuInput;
