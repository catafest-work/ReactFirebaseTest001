// import React from 'react';
// import { AppRegistry } from 'react-native';
// import AppMobile from './AppMobile';
// //import WebApp from './__WebApp';

// import WebApp from './WebApp';

// const appName = "ReactFirebaseTest001"

// const AppWeb = () => {
//   //return <AppWeb />; // works well 
//   return <WebApp />; // test with WebApp.tsx
// };

// AppRegistry.registerComponent(appName, () => AppWeb); // Passed appName as the first argument

// export default AppWeb; // Added export statement

import React from 'react';
import ReactDOM from 'react-dom';
import WebApp from './WebApp';

ReactDOM.render(<WebApp />, document.getElementById('root'));