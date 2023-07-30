export const customFetch = (params) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID ' + process.env.ACCESS_KEY,
    ...params.headers,
  };

  const requestOptions = {
    method: params.method,
    headers,
  };

  if (params.method === 'POST') {
    try {
      requestOptions.body = JSON.stringify(params.body);
    } catch (err) {
      console.log('Unable to stringify request body', err);
    }
  }

  return fetch(params.url, requestOptions)
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
