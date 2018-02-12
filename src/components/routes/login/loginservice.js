import axios from  'axios';
import ENV from '../../../constants/config';

let loginService = {}

loginService.login = (payload) => axios.post(ENV.BASE_URL + 'login',payload);

export default loginService;
