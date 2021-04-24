const closePageModal = (
  location: any,
  history: any,
  defaultReturnPath: string
) => {
  let returnPath;

  if (location.state) returnPath = location.state.returnPath;

  history.push(returnPath ? returnPath : defaultReturnPath);
};

export default closePageModal;
