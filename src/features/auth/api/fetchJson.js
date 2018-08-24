// @flow
import getToken from '../../../global/helpers/getToken';
import {rootAPI} from '../../../global/env';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function fetchJSON(
  endpoint: 'user',
  method: Method,
  token: string = getToken(),
): Promise<*> {
  let headers = {
    method: method,
    headers: {Authorization: `token ${token}`},
  };
  return fetch(rootAPI + endpoint, headers).then((res) => res.json());
}

export default fetchJSON;
