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
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Access-Control-Allow-Headers'
            }
            
            const response = await axios.post(UrlService.edit(credentials.id), credentials,{
                headers: headers
            });
            console.log(response.data)
            
            return response.data;
        } catch (error) {   
            console.log("error", error.response);
            return false;
        }
    }
}
export default new addticket();