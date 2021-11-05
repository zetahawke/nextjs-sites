const baseUrl = process.env.BASE_URL || "localhost:1337";

export const fetchQuery = async (path, params = null) => {
  let url;
  if (params !== null) {
    url = `${baseUrl}/${path}?${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }
  const response = await fetch(`http://${url}`);
  const data = await response.json();
  return data;
};
