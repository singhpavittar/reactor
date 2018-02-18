import ENV from './config';
import ASSET from './assets';

export default {
  default : {
    name : 'Reactor',
    title : 'Reactor',
    description : 'A react app which raects.',
    url : ENV.URL,
    img : ASSET.LOGO
  },
  home : {
    id : 'home',
    title : 'Home',
    description : 'Home Page'
  },
  about : {
    id : 'about',
    title : 'About',
    description : 'About Page'
  },
  error : {
    id : 'error',
    title : 'Error',
    description : 'Error Page'
  }
}
