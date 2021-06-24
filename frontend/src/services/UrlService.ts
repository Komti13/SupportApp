let apiDomain = ''
if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https//Envast.com/';
} else {
    apiDomain = 'http://localhost:8000/';
}
class UrlService {
    static loginUrl() {
        return apiDomain + 'api/login';
    }
    static registerUrl() {
        return apiDomain + 'api/register';
    }
}
export default UrlService;