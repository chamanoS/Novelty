const supertest = require('supertest'); //requires supertest
const app = require('../app') //requires app

describe("Testing content endpoints", () => {
  
//   //get content
    it('tests the get content and returns a success message', async() => {
        let response;
        await supertest(app).get('/api/v1/content/{id}').send({
            id_cat:'1'
    }).then(res => {
      response = JSON.parse(res.text);
      console.log(response)
    })
    expect(response.message).toBe('Here is the content you requested.')
    expect(response.status).toBe(200)
    });
   
})