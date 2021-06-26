import axios from 'axios';
import UrlService from './UrlService';
class GetAllData {
    async getdata() {
        try {
            const response = await axios.get(UrlService.getdata());
            // console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }

}
export default new GetAllData();