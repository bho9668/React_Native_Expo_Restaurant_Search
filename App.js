// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import SearchScreen from './src/screens/SearchScreen';

// const navigator = createStackNavigator({
//   Search: SearchScreen,
// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   },
// });

// export default createAppContainer(navigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);