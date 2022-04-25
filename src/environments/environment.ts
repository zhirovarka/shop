// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json',
  apiUrl: '../assets/data.json',
  logo: '/assets/shop-logo.png',
  noImage: '/assets/no-image-icon-6.png',
  firebaseConfig: {
    apiKey: 'AIzaSyA16GV05hn8HdmRTdwRu3Y_cYA0I2HtBg8',
    authDomain: 'clothing-store-spa.firebaseapp.com',
    databaseURL:
      'https://clothing-store-spa-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'clothing-store-spa',
    storageBucket: 'clothing-store-spa.appspot.com',
    messagingSenderId: '700676696120',
    appId: '1:700676696120:web:564cedf27b54f3c38f5ecd',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
