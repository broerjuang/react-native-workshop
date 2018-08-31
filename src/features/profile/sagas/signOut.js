//@flow
import {takeLatest, put} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {USERTOKEN} from '../../../global/constants/asyncStorage';

function* signOutWatcher(): Iterable<*> {
  yield takeLatest('ACTIONS/AUTH_GITHUB_SIGNOUT_REQUESTED', signOut);
}
function* signOut(): Iterable<*> {
  try {
    yield AsyncStorage.multiRemove([USERTOKEN, 'currentUser']);
    yield put({
      type: 'ACTIONS/AUTH_GITHUB_SIGNOUT_SUCCED',
      payload: {message: 'sign out succed'},
    });
  } catch (error) {
    console.log('errorrrr', error);
  }
}
export default signOutWatcher;
