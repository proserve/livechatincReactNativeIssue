import FirstTabScreen from './src/FirstTabScreen';
import SecondTabScreen from './src/SecondTabScreen';
import LiveChat from 'react-native-livechat'
import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
}

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a
      title: 'Screen One',
      icon: require('./src/img/automotive.png'),
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      title: 'Screen Two',
      icon: require('./src/img/beauty.png'),
    },
  ],
});
