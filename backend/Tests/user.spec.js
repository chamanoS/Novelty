const supertest = require('supertest'); //requires supertest
const app = require('../app'); //requires app

    describe('Testing user endpoints',() => {

    // register
    it('tests register endpoint and returns a success message', async() => {
    
        let response ;
        await supertest(app).post('/api/v1/users').send({
            first_name:'sam',
            last_name:'mcholo',
            email:'sam@gmail.com',
            user_password:'123'
        }).then( res => {
            response = JSON.parse(res.text) ;
             console.log(response)
        });
        expect(response.message).toBe('Successfully created an account.')
        expect(response.status).toBe(201)
    });



    // login
    it('tests the login endpoint and returns a success message', async() => {
       
        let response ;
        await supertest(app).post('/api/v1/users/login').send({
       email:'sam@gmail.com',
            user_password:'123'
        }).then(res => {
            response = JSON.parse(res.text);
            console.log(response)
        });
        expect(response.message).toBe('Logged in successfully.')
        expect(response.status).toBe(200);
     })

//     //forgot password
    it('tests the forgot password endpoint and returns a success message', async() => {

        let response ;
        await supertest(app).post('/api/v1/users/forgotPassword').send({
            first_name:'sam',
            email:'sam@gmail.com'
        }).then(res => {
            response = JSON.parse(res.text)
            console.log(response)
        })
        expect(response.message).toBe(`Thank you! Please check your email, we've sent you an email.`)
        expect(response.status).toBe(200);
    })

   //reset password
    it('tests the reset password endpoint and returns a success message', async() => {
        let response ;
         await supertest(app).post('/users/reset').send({
            user_password:'sam'
        }).then( res => {
            response = JSON.parse(res.text)
            console.log(response)
        })
        expect(response.message).toBe('Successfully updated.')
        expect(response.status).toBe(200);
    })
 })