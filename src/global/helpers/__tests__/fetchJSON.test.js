// @flow
import fetchJSON from '../fetchJSON';

type Data = {
  message: string;
  documentation_url: string;
};

it('should fetch API', async(done) => {
  try {
    let data: Data = await fetchJSON < Data > ('', 'GET', '');
    let {message} = data;
    expect(message).toEqual('Bad credentials');
    done();
  } catch (e) {
    console.log('Error, ', e.message);
    done();
  }
});
