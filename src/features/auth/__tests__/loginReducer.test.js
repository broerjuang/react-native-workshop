import loginReducer from '../reducers/loginReducer';
describe('testing for  login reducer', () => {
  it('should return initial state request login reducer', () => {
    const action = {
      type: 'ACTIONS/AUTH_GITHUB_REQUESTED',
    };
    const initialState = {isLogin: false};
    expect(loginReducer(initialState, action)).toEqual({isLogin: false});
  });
  it('should return payload and login true ', () => {
    const action = {
      type: 'ACTIONS/AUTH_GITHUB_SUCCED',
      payload: {
        currentUser: {login: 'aji', email: 'ajilantang@gmail.com'},
        token: '1231241482hhsabdba',
      },
    };
    const initialState = {isLogin: false};
    expect(loginReducer(initialState, action)).toEqual({
      currentUsers: {email: 'ajilantang@gmail.com', login: 'aji'},
      isLogin: true,
      token: '1231241482hhsabdba',
    });
  });
});
