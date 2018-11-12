import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootStack from './app/screens/'

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <RootStack />;
  }
}