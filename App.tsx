/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "./src/common/global/baseConst";
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import MainNavigator from './src/navigation/router';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />    
    </Provider>
  );
};

export default App;
