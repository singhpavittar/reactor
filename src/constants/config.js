import CONST from './constants';

const STAG_ENV = {
  BASE_URL : 'https://reqres.in/api/'
};

const PROD_ENV = {
  BASE_URL : 'https://reqres.in/api/'
};

const LOCAL_ENV = {
  BASE_URL : 'https://reqres.in/api/'
};

const COMMON_ENV = {
  // Add here if there is any `COMMON ENVIRONMENT VARIABLES`
};

let app_env = process.env.REACT_APP_ENV;

let ENV = {};

switch(app_env) {
  case CONST.ENV_TYPES.PROD:
    ENV = {...PROD_ENV, ...COMMON_ENV};
    break;

  case CONST.ENV_TYPES.STAG:
    ENV = {...STAG_ENV, ...COMMON_ENV};
    break;

  case CONST.ENV_TYPES.LOCAL:
    ENV = {...LOCAL_ENV, ...COMMON_ENV};
    break;

  default:
    ENV = {...STAG_ENV, ...COMMON_ENV};
    break;
}

export default ENV;
