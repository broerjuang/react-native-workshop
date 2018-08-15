// @flow

const rootAPI = 'http://api.github.com/';
const clientID = '6b2f1b1ed973776bd76f';
const clientSecret = '766cdea39614d1fadc386fb553768b865cbe5558';
const authorizationURI = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user%20repo%20notifications`;

export {rootAPI, clientID, clientSecret, authorizationURI};
