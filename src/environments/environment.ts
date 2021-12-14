// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // API: "http://on_api_v1.test/api/",
  // AuthAPI: 'http://on_api_v1.test/api/auth/'

//   API: "http://on_api.test/api/",
//   urlImages: "http://on_api.test/storage/images/",
//   AuthAPI: 'http://on_api.test/api/auth/'

API: "https://api.oncapacitaciones.com/api/",
AuthAPI: 'https://api.oncapacitaciones.com/api/auth/',
urlImages: "https://api.oncapacitaciones.com/storage/images/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
