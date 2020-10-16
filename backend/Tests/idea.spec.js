const supertest = require('supertest'); //requires supertest
const app = require('../app');

 describe("Testing ideas endpoints", () => {
    
//    // add business idea
it('tests add business idea endpoint and returns a success message', async() => {
        let response ;
         await supertest(app).post('/api/v1/ideas').send({
            busin_idea:'the nail guru',
            descript:'the nail technication',
                id_user:'1'

        }).then(res => {
            response = JSON.parse(res.text);
            console.log(response)
        })
        expect(response.message).toBe('you have successfully added an idea')
        expect(response.status).toBe(201);
    })
    

//      //gets business idea
    it('tests get business idea endpoint and returns a success message', async() => {
        let response ;
        await supertest(app).get('/api/v1/ideas/' + 1).send().then( res => {
                    response =  JSON.parse(res.text);
                    console.log(response)
                })
        expect(response.message).toBe('getting all your ideas.');
        expect(response.status).toBe(201);
    })

//     //updates a business idea
    it('tests update business idea endpoint and returns a success message', async() => {
        let response ;
         await supertest(app).patch('/api/v1/ideas').send({
            b_id:1,
            u_id:1
        }).then(res => {
            response = JSON.parse(res.text)
            console.log(response);
        })
        expect(response.message).toBe('You have successfully deleted your idea')
        expect(response.status).toBe(201)
    })
 })