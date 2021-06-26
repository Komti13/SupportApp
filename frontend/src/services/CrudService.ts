import axios from 'axios';
import UrlService from './UrlService';

interface ticketcredentials {
    category: String,
    subject: String,
    description: String,

}
interface editcredentials {
    id: number,
    category: String,
    subject: String,
    description: String,

}
interface repliecredentials {
    id: number,
    content: String,

}
//CRUD service contains add methode for tickets and edit methode for tickets and addreplie methode for replies
class addticket {
    async add(credentials: ticketcredentials) {
        try {
            const response = await axios.post(UrlService.add(), credentials);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }
    async edit(credentials: editcredentials) {
        try {


            const response = await axios.put(UrlService.edit(credentials.id), credentials);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }
    async addreplie(credentials: repliecredentials) {
        try {
            const response = await axios.post(UrlService.addreplie(credentials.id), credentials);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("error", error.response);
            return false;
        }
    }
}
export default new addticket();