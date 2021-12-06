const _getHeader = () => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return header;
};

export default async function APICaller(
  endpoint,
  method = "GET",
  body,
  headers
) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}${endpoint}`,
      {
        headers: _getHeader(),
        method,
        body: body ? (headers ? body : JSON.stringify(body)) : null,
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
