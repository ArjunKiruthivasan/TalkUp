// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBRp-ZJSrtLuateGflQowP4W2O6IK14VOo",
    authDomain: "chat-demo-2f98a.firebaseapp.com",
    databaseURL: "https://chat-demo-2f98a.firebaseio.com",
    projectId: "chat-demo-2f98a",
    storageBucket: "chat-demo-2f98a.appspot.com",
    messagingSenderId: "436912193980"
  }
};
