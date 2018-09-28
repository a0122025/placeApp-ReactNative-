import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from '../helper/AppIcons';

iconsLoaded.then(() => {
    console.log('loaded icons');
});

export const goMainTab = () =>
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BottomTabsId',
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Navigation.Home',
                                        options: {
                                            bottomTab: {
                                                text: 'Tab 2',
                                                icon: iconsMap['ios-people']
                                            }
                                        }
                                    }
                                }
                            ],
                            name: 'Navigation.Home',
                            options: {
                                bottomTab: {
                                    fontSize: 12,
                                    icon: iconsMap['ios-people']
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Navigation.FindPlace',
                            options: {
                                bottomTab: {
                                    fontSize: 12,
                                    icon: iconsMap['ios-people']
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Navigation.SharePlace',
                            options: {
                                bottomTab: {
                                    fontSize: 12,
                                    icon: iconsMap['ios-people--active']
                                }
                            }
                        }
                    }
                ]
            }
        }
    });

export const goHome = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App1',
                children: [
                    {
                        component: {
                            name: 'Navigation.Home'
                        }
                    }
                ]
            }
        }
    });

export const goAuth = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App2',
                children: [
                    {
                        component: {
                            name: 'Navigation.Authentication'
                        }
                    }
                ]
            }
        }
    });

export const showOverlay = () =>
    Navigation.showOverlay({
        component: {
            name: 'Navigation.Overlay',
            options: {
                overlay: {
                    interceptTouchOutside: true
                }
            }
        }
    });
