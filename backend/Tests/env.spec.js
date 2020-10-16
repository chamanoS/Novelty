
require("dotenv").config();

describe(' Testing enviroment variables', () => {

    //host
    it('should have a host', () => {
        expect(process.env.HOST).toBeDefined()
    });

    //user
    it('should have a user',() => {
        expect(process.env.USER_ONE).toBeDefined()
    });
    
    //password
    it('should have a password', () => {
        expect(process.env.PASSWORD).toBeDefined()
    });

    //db
    it('should have a database name', () => {
        expect(process.env.DB).toBeDefined()
    })

})