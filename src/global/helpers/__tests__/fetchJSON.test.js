// @flow
import fetchJSON from '../fetchJSON';

type Data = {
  message: string;
  documentation_url: string;
};

it('should fetch API', async() => {
  try {
    let data: Data = await fetchJSON < Data > ('', 'GET', '');
    let {message} = data;
    expect(message).toEqual('Bad credentials');
  } catch (e) {
    console.log('Error, ', e.message);
  }
});
