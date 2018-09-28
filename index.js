import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation/screen';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Navigation.Welcome'
            }
        }
    });
});
