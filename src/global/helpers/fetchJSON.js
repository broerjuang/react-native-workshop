// @flow
import {connect} from 'react-redux';

function checkEndpoint(endpoint: string) {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }
  return endpoint;
}

function fetchJSON(endpoint: string, token: string): Promise<JSON> {
  endpoint = checkEndpoint(endpoint);
  return fetch(
    'http://api.github.com/' + endpoint + '?access_token=' + token,
  ).then((res: Response) => res.json());
}

function mapStateToProps(state) {
  return {token: state.loginReducer.token};
}

export default connect(mapStateToProps)(fetchJSON);
