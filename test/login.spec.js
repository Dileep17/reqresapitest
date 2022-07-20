import fetch from 'node-fetch';
import chai from 'chai';
const expect = chai.expect;

describe('Login', () => {

    const baseURL = "https://reqres.in/api/";

    it('Should be able to login with valid credentials', async () => {
        const payload1 = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };

        const url = baseURL.concat('login');
        const response = await fetch(
            url, 
            { 
                method: 'POST',
                body: JSON.stringify(payload1), 
                headers: {'Content-Type': 'application/json'}
            });
        const responseData = await response.json();
        expect(response.status).to.eq(200);
        expect(responseData).to.deep.eq({
            "token": "QpwL5tke4Pnpja7X4"
        });            
    });

    it('Should get error when password is missing in login payload', async () => {
        const payload1 = {
            "email": "peter@klaven"
        };

        const url = baseURL.concat('login');
        const response = await fetch(
            url, 
            { 
                method: 'POST',
                body: JSON.stringify(payload1), 
                headers: {'Content-Type': 'application/json'}
            });
        const responseData = await response.json();
        expect(response.status).to.eq(400);
        expect(responseData).to.deep.eq({
            "error": "Missing password"
        });            
    });

})