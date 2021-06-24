import axios from 'axios';
import UrlService from './UrlService';

interface loginCredentials {
    email: String,
    password: String
}
interface regCredentials {
    name: String,
    email: String,
    password: String,
    password_confirmation: String

}
class AuthService {
    async doUserLogin(credentials: loginCredentials) {
        try {
            const response = await axios.post(UrlService.loginUrl(), credentials);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }
    async registration(credentials: regCredentials) {
        try {
            const response = await axios.post(UrlService.registerUrl(), credentials);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }
}
export default new AuthService();