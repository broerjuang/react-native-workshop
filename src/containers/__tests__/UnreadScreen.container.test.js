import {mapDispatchToProps} from '../UnreadScreen.container';
describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
  it('should dispatch mark all read notification', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).markAllAsRead();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'MARK_ALL_AS_READ'});
  });
  it('should dispatch mark all read notification', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).markAsRead(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'MARK_AS_READ',
      payload: 2,
    });
  });
});
