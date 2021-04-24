// to get data stored
export const getStorageValue = (key: string) => {
  const value = localStorage[key];

  if (value) return JSON.parse(value);
  return value;
};

function useStorage() {
  //update auth status of user in local storage
  const updateAuthStatus = (loggedIn: boolean, data: any) => {
    localStorage["loggedIn"] = loggedIn;

    const { username, fullName, imageUrl } = data;
    localStorage["userData"] = JSON.stringify({
      username,
      fullName,
      imageUrl,
    });
  };

  //to check if this is the first page the user enters
  const checkIfFirstPage = () => {
    const value = sessionStorage["firstPage"];

    if (value) return JSON.parse(value);
    return !value;
  };

  //set firstPage value to false after initial page renders
  const updateFirstPageValue = () => (sessionStorage["firstPage"] = false);

  return {
    updateAuthStatus,
    getStorageValue,
    checkIfFirstPage,
    updateFirstPageValue,
  };
}

export default useStorage;
