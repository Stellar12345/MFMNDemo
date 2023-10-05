const config = {
  api: 'https://mfmn.stellarsolutionsindia.com/admin/Api',
  options: {
    headers: { 'content-type': 'application/json' },
  },
  
};

export const api = {
  API_BASE_URL : 'https://mfmn.stellarsolutionsindia.com/admin/Api'
}

const httpGet = (endpoint) => {
  return fetch(`${config.api}${endpoint}`, {
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => { 
      console.error(error);
      throw Error(error);
    });
};

const httpPost = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
};

const httpPut = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'put',
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpDelete = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'delete',
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const handleResponse = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response.json() | 'error');
  }
};

export default { httpGet, httpPost, httpPut, httpDelete };
