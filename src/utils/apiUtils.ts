// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleApiError = (error: any): string => {
  console.error(error);

  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
    return "The server responded with an error. Please try again later.";
  } else if (error.request) {
    console.error(error.request);
    return "No response was received from the server.";
  } else {
    console.error("Error", error.message);
    return "An error occurred while setting up the request. Please try again.";
  }
};
