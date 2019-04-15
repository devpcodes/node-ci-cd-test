var request = require('supertest');
var {app, server} = require('../index.js');
describe('GET /', function() {
    it('respond with hello world', function(done) {
        // request(app).get('/').expect('hello world').end((err)=>{
        //     if(err) throw done(err);
        //     done();
        // });
        request(app).get('/').end((err, response)=>{
            if(err) throw done(err);
            expect(response.text).toEqual('hello world CI/CD')
            done();
        });
        // const result = await request(app).get("/");
        // expect(result.text).toEqual("hello world");
        // done();
    });
    afterAll(()=>{
        server.close();
    })
});
