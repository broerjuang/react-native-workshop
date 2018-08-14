//@flow
import {AsyncStorage} from 'react-native';
async function getToken() {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

export default getToken;
