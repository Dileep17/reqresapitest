import fetch from 'node-fetch';
import chai from 'chai';
const expect = chai.expect;

describe('GET User', () => {
    
    const baseURL = "https://reqres.in/api/";

    it('Should be able to get existing user', async () => {
        const url = baseURL.concat('users/1');
        const response = await fetch(url);
        const responseData = await response.json();
        expect(response.status).to.eq(200);
        expect(responseData).to.deep.eq(
            {
                "data":{
                "id":1,
                "email":"george.bluth@reqres.in",
                "first_name":"George",
                "last_name":"Bluth",
                "avatar":"https://reqres.in/img/faces/1-image.jpg"
                },
                "support":{
                    "url":"https://reqres.in/#support-heading",
                    "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
                }
            });
    });

    it('Should get 404 when tried to user who don\'t exist', async () => {
        const url = baseURL.concat('users/23');
        const response = await fetch(url);
        const responseData = await response.json();
        expect(response.status).to.eq(404);
        expect(responseData).to.deep.eq({});
    });

});