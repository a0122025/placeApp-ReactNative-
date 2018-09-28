import { Navigation } from 'react-native-navigation';
import Authentication from '../screens/Authentication/Authentication';
import FindPlace from '../screens/FindPlace/FindPlace';
import SharePlace from '../screens/SharePlace/SharePlace';
import Home from '../screens/Home/Home';
import HomeSetting from '../screens/HomeSetting/HomeSetting';
import Overlay from '../screens/Overlay/Overlay';
import Welcome from '../screens/Welcome/Welcome';

export function registerScreens() {
    Navigation.registerComponent('Navigation.Welcome', () => Welcome);
    Navigation.registerComponent('Navigation.Authentication', () => Authentication);
    Navigation.registerComponent('Navigation.FindPlace', () => FindPlace);
    Navigation.registerComponent('Navigation.SharePlace', () => SharePlace);
    Navigation.registerComponent('Navigation.Home', () => Home);
    Navigation.registerComponent('Navigation.HomeSetting', () => HomeSetting);
    Navigation.registerComponent('Navigation.Overlay', () => Overlay);
}
