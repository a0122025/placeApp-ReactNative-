import { Navigation } from 'react-native-navigation';
import AuthScreen from './Auth/Auth';
import FindPlace from './FindPlace/FindPlace';
import SharePlace from './SharePlace/SharePlace';

export function registerScreens() {
    Navigation.registerComponent('navigation.place.AuthScreen', () => AuthScreen);
    Navigation.registerComponent('navigation.place.FindPlace', () => FindPlace);
    Navigation.registerComponent('navigation.place.SharePlace', () => SharePlace);
}
