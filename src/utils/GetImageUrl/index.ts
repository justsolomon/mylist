const getImageUrl = (url: string) => {
  if (url)
    return url.replace("url(", "").replace(")", "").replace("&w=200", "");
};

export default getImageUrl;
