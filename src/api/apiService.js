//@flow
import env from './envConfig';
import {result} from 'lodash';

const parseJson = (response) =>
  new Promise((resolve, reject) => {
    response
      .json()
      .then((result) => {
        response.data = result;
        resolve(response);
      })
      .catch((err) => {
        response.data = err;
        reject(response);
      });
  });

async function  fetchData(url, config) =>
 let result = await fetch(url, config)
    .then(parseJson)
    .then((response) => {
      const {status} = response;
      if (status >= 200 && status < 300) {
        return response;
      }

      if (status === 401) {
        remove(storageKeys['USER_DATA']);
      }

      if (status === 400) {
        throw response;
      }
      throw response;
    });

const GET = (path, headers, dinamicPath) => {
  const url = dinamicPath
    ? SERVER_URL_DOCMAN + endpoints[path] + String(dinamicPath)
    : SERVER_URL_DOCMAN + endpoints[path];
  const itoken = result(getUserData(), 'itoken', '');
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      mode: 'no-cors',
      'Content-Type': 'application/json',
      itoken,
      ...headers,
    },
  };
  return fetchData(url, config);
};


const POST = (path, requestBody, headers, dinamicPath) => {
  let {body = {}} = requestBody;
  const itoken = result(getUserData(), 'itoken');
  const url = dinamicPath
    ? SERVER_URL_DOCMAN + endpoints[path] + dinamicPath
    : SERVER_URL_DOCMAN + endpoints[path];
  const config = {
    method: 'POST',
    credentials: 'include',
    withCredentials: true,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      itoken,
      ...headers,
    },
  };
  return fetchData(url, config);
};

const POST_CHANGE_PASSWORD = (path, requestBody, headers, dinamicPath) => {
  let {body = {}} = requestBody;
  const itoken = result(getUserData(), 'itoken');
  const url = dinamicPath
    ? SERVER_URL_DOCMAN + endpoints[path] + dinamicPath
    : SERVER_URL_DOCMAN + endpoints[path];
  const config = {
    method: 'POST',
    credentials: 'include',
    withCredentials: true,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      itoken,
      ...headers,
    },
  };
  return fetchData(url, config);
};

const POST_REPO = (path, requestBody, headers, queryString = '') => {
  const url =
    SERVER_URL_REPO + endpoints[path] + `?api_key=${REPO_API}` + queryString;
  let {body = {}} = requestBody;
  const config = {
    method: 'POST',
    body: body,
    headers: {
      ...headers,
    },
  };
  return fetchData(url, config);
};

const mock = (endpoint) => {
  const {response} = mockResponses[endpoint];
  return new Promise((resolve, reject) => {
    try {
      const res = {
        status: 200,
        data: response,
      };
      setTimeout(() => resolve(res), 1000);
    } catch (exception) {
      reject(exception);
    }
  });
};

const POST_BROADCAST = (path, requestBody, headers, dinamicPath) => {
  let {body = {}} = requestBody;
  const itoken = result(getUserData(), 'itoken');
  const url = dinamicPath
    ? SERVER_URL_DOCMAN + endpoints[path] + dinamicPath
    : SERVER_URL_DOCMAN + endpoints[path];
  const config = {
    method: 'POST',
    credentials: 'include',
    withCredentials: true,
    body: body,
    headers: {
      itoken,
    },
    ...headers,
  };
  return fetchData(url, config);
};

const GET_SIVERA = (path, headers, dinamicPath) => {
  const url = dinamicPath
    ? SIVERA_LINK + endpoints[path] + String(dinamicPath + '/')
    : SIVERA_LINK + endpoints[path];
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  return fetchData(url, config);
};


const GET_TOKEN = (path, headers, dinamicPath) => {
  const url = dinamicPath
    ? MAIN_LINK + endpoints[path] + String(dinamicPath)
    : MAIN_LINK + endpoints[path];
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  return fetchData(url, config);
};


export default {
};
