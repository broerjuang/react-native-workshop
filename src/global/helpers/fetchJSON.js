// @flow
import getToken from './getToken';
import {rootAPI} from '../env';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

async function fetchJSON<T>(
  endpoint: string,
  method: Method,
  token: string = getToken(),
): Promise<T> {
  let headers = {
    method: method,
    headers: {Authorization: `token ${token}`},
  };
  let data: {json: () => T} = await fetch(rootAPI + endpoint, headers);
  let json: T = await data.json();
  return json;
}

export default fetchJSON;
