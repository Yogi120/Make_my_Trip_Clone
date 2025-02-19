import axios from 'axios';
import Cookies from 'universal-cookie';
import { getToken } from './component/login/loginpanel/LoginForm';
const cookies = new Cookies();

axios.defaults.withCredentials = true;
class Auth {
	constructor() {
		this.authenticated = false;
	}

	isAuthenticated() {
		const accessToken = getToken();
		const refreshToken = getToken();
		if (!accessToken && !refreshToken) {
			return (this.authenticated = false);
		}
		if (accessToken && refreshToken) {
			return (this.authenticated = true);
		}
		// if (!accessToken && refreshToken) {
		// 	axios
		// 		.post('http://localhost:4000/refresh', {
		// 			withCredentials: true
		// 		})
		// 		.then(function(res) {
		// 			console.log(res.data);
					
		// 			window.location.reload();
		// 		})
		// 		.catch(function(error) {
		// 			console.log(error.response);
		// 		});
		// }
	}
}

export default new Auth();