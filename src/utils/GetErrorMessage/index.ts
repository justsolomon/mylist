const getErrorMessage = (err: any) => {
  let errorMessage;
  if (err.response) errorMessage = err.response.data.error;
  else errorMessage = err.message;

  return errorMessage;
};

export default getErrorMessage;
