// @flow
import getToken from './getToken';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function fetchJSON(endpoint: string, method: Method): Promise<JSON> {
  let token = getToken();
  let headers = {
    method: method,
    Authorization: `token ${token}`,
  };
  return fetch('http://api.github.com/' + endpoint, headers).then(
    (res: Response) => res.json(),
  );
}

export default fetchJSON;
