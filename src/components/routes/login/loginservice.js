import axios from  'axios';
import ENV from '../../../constants/config';

let loginService = {}

loginService.login = (payload) => axios.post(ENV.REQ_RES_API + 'login',payload);

export default loginService;
