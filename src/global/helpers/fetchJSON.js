// @flow
import getToken from './getToken';
import {rootAPI} from '../env';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function fetchJSON(endpoint: string, method: Method): Promise<JSON> {
  let token = getToken();
  let headers = {
    method: method,
    Authorization: `token ${token}`,
  };
  return fetch(rootAPI + endpoint, headers).then((res: Response) => res.json());
}

export default fetchJSON;
