// @flow
import getToken from '../../../global/helpers/getToken';
import {rootAPI} from '../../../global/env';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';
type CurrentUsers = {
  login: string;
  name: string;
  email: string;
  follower: number;
  private_gists: number;
  public_repos: number;
  avatar_url: string;
  followers: number;
  following: number;
};
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
