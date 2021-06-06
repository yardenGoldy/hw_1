export enum Environment {
  dev = "dev",
  prod = "prod"
}

const configDevFakeAuth = {
  "environment": Environment.dev,
  "database": {
    "servers": ["127.0.0.1"],
    "port": 27017,
    "user": undefined,
    "pass": undefined
  },
  "shiftsBuilderAlgorithm": {
    "url": "127.0.0.1:3060",
    "getStaffedBoard": "/getStaffedBoard"
  },
  "auth": {
    "google": {
      "clientID": "760256814376-5d0kpt2fmukjj0j7a77ddeh8sbnceh0o.apps.googleusercontent.com",
      "clientSecret": "no_6z5KAv_h10ys1VoQKQ8Ib"
    },
    "secretCookieSession": "yardenisthking"
  },
  "email": {
    "type": "Google mail",
    "username": "mish.mesh.shifts@gmail.com",
    "password": "Ofri1234"
  },
  "fakeAuth": true
};

const configDev = {
  "environment": Environment.dev,
  "database": {
    "servers": ["127.0.0.1"],
    "port": 27017,
    "user": undefined,
    "pass": undefined
  },
  "shiftsBuilderAlgorithm": {
    "url": "127.0.0.1:3060",
    "getStaffedBoard": "/getStaffedBoard"
  },
  "auth": {
    "google": {
      "clientID": "760256814376-5d0kpt2fmukjj0j7a77ddeh8sbnceh0o.apps.googleusercontent.com",
      "clientSecret": "no_6z5KAv_h10ys1VoQKQ8Ib"
    },
    "secretCookieSession": "yardenisthking"
  },
  "email": {
    "type": "Google mail",
    "username": "mish.mesh.shifts@gmail.com",
    "password": "Ofri1234"
  },
  "fakeAuth": false
};

const configProd = {
  "environment": Environment.prod,
  "database": {
    "servers": ["193.106.55.172"],
    "port": 23777,
    "user": "admin",
    "pass": "Proj72"
  },
  "shiftsBuilderAlgorithm": {
    "url": "http://11a7a27c.ngrok.io",
    "getStaffedBoard": "/getStaffedBoard"
  },
  "auth": {
    "google": {
      "clientID": "760256814376-5d0kpt2fmukjj0j7a77ddeh8sbnceh0o.apps.googleusercontent.com",
      "clientSecret": "no_6z5KAv_h10ys1VoQKQ8Ib"
    },
    "secretCookieSession": "yardenisthking"
  },
  "email": {
    "type": "Google mail",
    "username": "mish.mesh.shifts@gmail.com",
    "password": "Ofri1234"
  },
  "fakeAuth": false
};

export default configProd;