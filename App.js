import React from 'react';
import { StackNavigator } from 'react-navigation';

import LanguageScreen from './app/screens/LanguageScreen';
import HomeScreen from './app/screens/HomeScreen';
import MenuScreen from './app/screens/MenuScreen';
import PrivacyPolicyScreen from './app/screens/PrivacyPolicyScreen';
import HowItWorksScreen from './app/screens/HowItWorksScreen';
import GangScreen from './app/screens/GangScreen';
import CameraScreen from './app/screens/CameraScreen';
import InfoScreen from './app/screens/InfoScreen';


const RootStack = StackNavigator(
  {
    Language: {
      screen: LanguageScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Menu: {
      screen: MenuScreen,
    },
    PrivacyPolicy: {
      screen: PrivacyPolicyScreen,
    },
    HowItWorks: {
      screen: HowItWorksScreen,
    },
    Gang: {
      screen: GangScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    Info: {
      screen: InfoScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}