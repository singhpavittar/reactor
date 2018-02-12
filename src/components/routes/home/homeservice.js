import Axios from '../../../utils/axiosinstance';
import ENV from '../../../constants/config';


let homeService = {};

homeService.getDetails = (payload) => Axios.get(ENV.BASE_URL + 'users?page=2');

export default homeService;
