const isPageModal = (path: string) => {
  let modalPaths = [
    "/create",
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/search",
    "/logout",
    "/card",
  ];

  return modalPaths.includes(path);
};

export default isPageModal;
