import { createStackNavigator } from 'react-navigation';

import LanguageScreen from './LanguageScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import HowItWorksScreen from './HowItWorksScreen';
import GangScreen from './GangScreen';
import CameraScreen from './CameraScreen';
import InfoScreen from './InfoScreen';

const RootStack = createStackNavigator(
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
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#fff',
    }
  }
);

export default RootStack;