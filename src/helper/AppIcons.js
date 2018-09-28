import Ionicons from 'react-native-vector-icons/Ionicons';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    'ios-person': [30, '#bbb'],
    'ios-person--big': [50, '#bbb'],

    'ios-person--active': [30, '#fff'],
    'ios-person--active--big': [50, '#fff'],
    'ios-person--active--very-big': [100, '#fff'],

    'ios-people': [30, 'red'],
    'ios-people--active': [30, 'blue'],

    'ios-keypad': [30, '#bbb'],
    'ios-keypad--active': [30, '#fff'],

    'ios-chatbubbles': [30, '#bbb'],
    'ios-chatbubbles--active': [30, '#fff']
};

const defaultIconProvider = Ionicons;
console.log(Ionicons);
const iconsMap = {};
const iconsLoaded = new Promise(resolve => {
    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = defaultIconProvider;
            console.log('Hello ', icons[iconName][1]);
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            );
        })
    ).then(sources => {
        Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));
        resolve(true);
    });
});

export { iconsMap, iconsLoaded };
