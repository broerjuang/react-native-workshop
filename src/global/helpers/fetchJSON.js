// @flow
import {connect} from 'react-redux';

type Method = 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

function checkEndpoint(endpoint: string) {
  const rootAPI = 'api.github.com';
  if (endpoint.includes(rootAPI)) {
    endpoint = endpoint.slice(endpoint.indexOf(rootAPI) + rootAPI.length);
  }
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }
  return endpoint;
}

function fetchJSON(
  endpoint: string,
  method: Method,
  token: string,
): Promise<JSON> {
  endpoint = checkEndpoint(endpoint);
  let headers = {
    method: method,
    Authorization: `token ${token}`,
  };
  return fetch('http://api.github.com/' + endpoint, headers).then(
    (res: Response) => res.json(),
  );
}

function mapStateToProps(state) {
  return {token: state.loginReducer.token};
}

export default connect(mapStateToProps)(fetchJSON);
