export const customFetch = (params) => {
  const { method, url, body, headers: customHeaders } = params;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID ' + process.env.NEXT_PUBLIC_ACCESS_KEY,
    ...customHeaders,
  };

  const requestOptions = {
    method: params.method,
    headers,
  };

  if (method === 'POST') {
    try {
      requestOptions.body = JSON.stringify(body);
    } catch (err) {
      console.log('Unable to stringify request body', err);
    }
  }

  return fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok)
        throw { status: response.status, message: "Didn't get OK response" };
      return response.json();
    })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
