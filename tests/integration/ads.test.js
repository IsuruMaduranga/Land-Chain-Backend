const request = require('supertest');
const mongoose = require('mongoose');
const 

let app;



describe('/api/ads', () => {
    beforeEach(()=>{app = require('../../app');});
    afterEach(()=>{mongoose.disconnect();});

    describe('GET /',() => {
        it('should return 401 if client is not logged in',(done) => {
            request(app).get('/api/ads').then(response=>{
                expect(response.status).toBe(401);
                done();
            })
        });
    });



});