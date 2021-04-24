const logout = () => {
  //clear auth status and user data in storage
  localStorage["loggedIn"] = false;
  localStorage["userData"] = null;

  //redirect to landing page
  location.href = location.origin;
};

export default logout;
