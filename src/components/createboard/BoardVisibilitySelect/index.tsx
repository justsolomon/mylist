import React from "react";
import { Menu, MenuItem, MenuList } from "@chakra-ui/menu";
import VisibilityMenuButton from "./VisibilityMenuButton";
import VisibilityOption from "./VisibilityOption";
import { useFormikContext } from "formik";

function BoardVisibilitySelect() {
  const { values, setFieldValue }: any = useFormikContext();

  return (
    <Menu>
      <VisibilityMenuButton name={values.private ? "Private" : "Public"} />
      <MenuList py="3" maxW="300px">
        <MenuItem onClick={() => setFieldValue("private", true)}>
          <VisibilityOption
            name="Private"
            description="Only you can see and edit this board."
            selected={values.private}
          />
        </MenuItem>
        <MenuItem onClick={() => setFieldValue("private", false)}>
          <VisibilityOption
            name="Public"
            description="Anyone on the internet with the link can see this board. Only you can edit."
            selected={!values.private}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BoardVisibilitySelect;
