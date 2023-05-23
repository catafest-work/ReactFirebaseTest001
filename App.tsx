// Import your AppWeb and AppMobile components
// import React from 'react';
// import AppWeb from './AppWeb';
// import AppMobile from './AppMobile';
// import { AppRegistry } from 'react-native';
// //import { isWeb } from 'react-native-platform';
// import { Platform } from 'react-native';

// const appName = 'ReactFirebaseTest001'; // Replace 'YourAppName' with the actual name of your application
// const isWeb = Platform.OS;
// // Conditionally register and render the components based on the platform
// if (isWeb) {
//   AppRegistry.registerComponent(appName, () => AppWeb);
// } else {
//   AppRegistry.registerComponent(appName, () => AppMobile);
// }

import React from 'react';
import AppWeb from './__WebApp';
import AppMobile from './AppMobile';
import { AppRegistry } from 'react-native';
import { Platform } from 'react-native';

const appName = 'ReactFirebaseTest001';
const isWeb = Platform.OS === 'web'; // Check if the platform is web

if (isWeb) {
  AppRegistry.registerComponent(appName, () => AppWeb);
} else {
  AppRegistry.registerComponent(appName, () => AppMobile);
}