
const supertest = require('supertest') //requires supertest
const app = require('../app');
const nock = require('nock');
const questions = require('../Controllers/questionController')
const db = require('../config/db');



 describe('Testing question endpoints', () => {

    test('tests get question endpoint and returns a success message', async() => {
        
        const data = await questions.getQuestions({ id: 100})
        expect(data.message).toEqual('Here are your questions.');

    })
    

    
    // adds answer
    it('tests add answer endpoint and returns a success message', async() => {
        let  response ;
         await supertest(app).post('/api/v1/questions/answers').send({
            user_answer:'yes',
            id_user:1,
            id_bus:1,
            id_que:1
        }).then(res => {
            response = JSON.parse(res.text);
            console.log(response)
        })
        expect(response.message).toBe('Thank you for answering')
        expect(response.status).toBe(201)
    })

   //update answer
    it('tests update answer endpoint and returns a success', async() => {
        let response ;
         await supertest(app).patch('/api/v1/questions').send({
            answer_user:'no',
            b_id:'1',
            u_id:'1'
        }).then(res => {
            response = JSON.parse(res.text);
            console.log(response)
        })
        expect(response.message).toBe('Thank you for updating your answer');
        expect(response.status).toBe(201)
    })
})