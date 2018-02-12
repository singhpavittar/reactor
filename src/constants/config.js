import CONST from './constants';

const STAG_ENV = {
  APP_NAME : 'Staging Reactor'
};

const PROD_ENV = {
  APP_NAME : 'Production Reactor'
};

const LOCAL_ENV = {
  APP_NAME : 'Local Reactor'
};

const COMMON_ENV = {
  common : {}
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
