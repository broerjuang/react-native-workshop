import {AuthSession} from 'expo';
// import credentials from '../credentials';

const CLIENT_ID = '65604622816426805c88';
const CLIENT_SECRET = '54fcf0e5666b46739b0ada3c6cab7e407cca6bec';

const REDIRECT_URL = AuthSession.getRedirectUrl();
const AUTH_URL =
  'https://github.com/login/oauth/authorize' +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

export default async function authenticateWithGithubAsync() {
  console.log('here');
  try {
    let authResult = await AuthSession.startAsync({
      authUrl: AUTH_URL,
    });

    if (authResult.type !== 'success') {
      return;
    }
    let code = authResult.params.code;
    let result = await _createTokenWithCode(code);
    console.log('woyyy');
    console.log(result, 'result');
    return result;
  } catch (e) {
    return null;
  }
}

function _createTokenWithCode(code) {
  const url =
    'https://github.com/login/oauth/access_token' +
    `?client_id=${CLIENT_ID}` +
    `&client_secret=${CLIENT_SECRET}` +
    `&code=${code}&scope=user:email`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
