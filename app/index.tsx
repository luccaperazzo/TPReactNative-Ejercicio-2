import React from 'react';
import { Provider } from 'react-redux';
import UserManagerScreen from '../src/screens/UserManagerScreen';
import { store } from '../src/store/store';

export default function Index() {
  return (
    <Provider store={store}>
      <UserManagerScreen />
    </Provider>
  );
}
