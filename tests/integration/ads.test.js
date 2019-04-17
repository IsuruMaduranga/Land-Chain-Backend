const request = require('supertest');

const server;

describe('/api/ads', () => {
    beforEach(() => { server = require('../../app'); });
    afterEach(()=>{server.close()});

    describe('GET /', () => {
        it('should return all ads',async () => {
            const res = request(server).get('/api/ads');
            expect(res.status).toBe(200);
        });
    });
});