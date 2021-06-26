import axios from 'axios';
import UrlService from './UrlService';
//GET data service contains getdata methode to get all tickets from data base

class GetAllData {
    async getdata() {
        try {
            const response = await axios.get(UrlService.getdata());
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }

}
export default new GetAllData();