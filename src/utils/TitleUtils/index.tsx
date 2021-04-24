export const TitleDefaultStyles = {
  outline: "0px solid transparent",
  borderWidth: "1px",
  borderColor: "transparent",
  borderRadius: "4px",
  role: "input",
  fontSize: "lg",
  fontWeight: "bold",
  contentEditable: true,
  suppressContentEditableWarning: true,
};

export const TitleFocusStyles = {
  borderColor: "rgb(49, 130, 206)",
  boxShadow: "rgb(49 130 206) 0px 0px 0px 1px",
};

export const updateValueIfChanged = (
  title: string,
  newTitle: string,
  updateTitle: () => void
) => {
  //update title if changes were made
  if (newTitle !== title) updateTitle();
};
