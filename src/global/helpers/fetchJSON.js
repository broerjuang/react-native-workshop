// @flow
import getToken from './getToken';
<<<<<<< HEAD
import {rootAPI} from '../env';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function fetchJSON(
  endpoint: string,
  method: Method,
  token: string = getToken(),
): Promise<*> {
=======

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function fetchJSON(endpoint: string, method: Method): Promise<JSON> {
  let token = getToken();
>>>>>>> fetchJSON not connected to Redux, instead use getToken Helper
  let headers = {
    method: method,
    headers: {Authorization: `token ${token}`},
  };
<<<<<<< HEAD
  return fetch(rootAPI + endpoint, headers).then((res: Response) => res.json());
=======
  return fetch('http://api.github.com/' + endpoint, headers).then(
    (res: Response) => res.json(),
  );
>>>>>>> fetchJSON not connected to Redux, instead use getToken Helper
}

export default fetchJSON;
