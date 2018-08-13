// @flow

type Action = {
  type: string;
  payload?: any;
};

type ItemID = {
  itemID: number;
};

export default function _markAsRead(id: ItemID = {itemID: -1}, action: Action) {
  // TODO: write function

  switch (action.type) {
    case 'MARK_AS_READ': {
      // eslint-disable-next-line no-console
      console.log('marked as read! the item ID is:', action.payload);
      break;
    }
    case 'MARK_ALL_AS_READ': {
      // eslint-disable-next-line no-console
      console.log('marked all as read!');
      break;
    }
    default:
      return id;
  }
}
