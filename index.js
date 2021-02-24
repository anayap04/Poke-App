/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from './App/Redux/store';



const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppRegistry.registerComponent(appName, () => RNRedux);
