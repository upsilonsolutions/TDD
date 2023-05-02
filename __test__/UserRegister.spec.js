 const request = require('supertest');
 const app  = require('../app')
 
 const messages = require('../messages')
describe('User Registration',(done)=>{


 it('return 200 when signup',(done)=>{
    request(app).post('/api/1.0/users')
    .send({
        username : 'muhammadali',
        email:'77.muhammadali@gmail.com',
        password:'testing'
    }).then((response)=>{
        expect(response.status).toBe(200);
        done();
    }
    )
 })
 it('return messages when signup',(done)=>{
    request(app).post('/api/1.0/users')
    .send({
        username : 'muhammadali',
        email:'77.muhammadali@gmail.com',
        password:'testing'
    }).then((response)=>{
        expect(response.body.message).toBe(messages.userCreatedSucessfully);
        done();
    }
    )
 })});