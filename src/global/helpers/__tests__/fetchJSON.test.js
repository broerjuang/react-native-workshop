// @flow
import fetchJSON from '../fetchJSON';

it('should fetch API', async() => {
  try {
    let {message} = await fetchJSON('', 'GET', '');
    expect(message).toEqual('Bad credentials');
  } catch (e) {
    console.log('Error, ', e);
  }
});
