let apiDomain = ''
if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https//Envast.com/';
} else {
    apiDomain = 'http://localhost:8000/';
}
 //URL service that provide the right url for each methode POST PUT GET
class UrlService {
    static loginUrl() {
        return apiDomain + 'api/login';
    }
    static registerUrl() {
        return apiDomain + 'api/register';
    }
    static getdata() {
        return apiDomain + 'api/tickets';
    }
    static add() {
        return apiDomain + 'api/tickets';
    }
    static edit(id) {
        return apiDomain + 'api/tickets/' + id;
    }
    static addreplie(id) {
        return apiDomain + 'api/replies/' + id;
    }
}
export default UrlService;