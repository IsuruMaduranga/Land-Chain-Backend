const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/user');
const { Ad } = require('../../models/ad');

let app;

describe('/api/ads', () => {
    beforeAll(async ()=>{
        app = require('../../app');

        await User.deleteMany({});
        await User.insertMany([
            { nic: "000000000V", firstName: "admin", lastName: "admin", email: "admin@landchain.com", password: "123456", type: "admin" },
            { nic: "111111111V", firstName: "user", lastName: "user", email: "user1@landchain.com", password: "123456", type: "user" },
            { nic: "222222222V", firstName: "user", lastName: "user", email: "user2@landchain.com", password: "123456", type: "user" }
        ]);
       
    });

    beforeEach(async () => { 
        app = require('../../app'); 
        await Ad.deleteMany({});
        await Ad.insertMany([
            {ownerId:"111111111V",landId:"1",city:"aaaa",phone:"1111111111",size:"100",price:"100",status:"active"},
            {ownerId:"111111111V",landId:"2",city:"aaaa",phone:"1111111111",size:"100",price:"100",status:"active"},
            {ownerId:"222222222V",landId:"3",city:"aaaa",phone:"1111111111",size:"100",price:"100",status:"active"},
            {ownerId:"222222222V",landId:"4",city:"aaaa",phone:"1111111111",size:"100",price:"100",status:"active"},
            {ownerId:"222222222V",landId:"5",city:"aaaa",phone:"1111111111",size:"100",price:"100",status:"active"}
        ]);
    });

    afterEach(async ()=>{
        app.close();
    });

    describe('GET /', () => {
    
        it('should return 401 if client is not logged in', async () => {
            res = await request(app).get('/api/ads');
            expect(res.status).toBe(401);
        });

        it('should return all ads not belonged to the user',async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res = await request(app).get('/api/ads').set('x-auth', token);
            expect(res.status).toBe(200);
            res.body.forEach(ad => {
                expect(ad).toHaveProperty('ownerId');
                expect(ad).toHaveProperty('landId');
                expect(ad).toHaveProperty('city');
                expect(ad).toHaveProperty('phone');
                expect(ad).toHaveProperty('size');
                expect(ad).toHaveProperty('price');
                expect(ad.ownerId).not.toBe('111111111V');
            });

        });

    });

    describe('GET /my', () => {
    
        it('should return 401 if client is not logged in', async () => {
            res = await request(app).get('/api/ads/my');
            expect(res.status).toBe(401);
        });

        it('should return user\'s ads',async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res = await request(app).get('/api/ads/my').set('x-auth', token);
            expect(res.status).toBe(200);
            res.body.forEach(ad => {
                expect(ad).toHaveProperty('ownerId','111111111V');
                expect(ad).toHaveProperty('landId');
                expect(ad).toHaveProperty('city');
                expect(ad).toHaveProperty('phone');
                expect(ad).toHaveProperty('size');
                expect(ad).toHaveProperty('price');
            });
        });

    });

    describe('DELETE /:id', () => {
    
        it('should return 401 if client is not logged in', async () => {
            res = await request(app).get('/api/ads/my');
            expect(res.status).toBe(401);
        });

        it('should not delete ad if it is not user\s',async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            const ad1 = await Ad.findOne({ownerId:'222222222V',landId:'3'});

            res1 = await request(app).delete(`/api/ads/${ad1._id}`).set('x-auth', token);
            expect(res1.status).toBe(401);

            ad2 = await Ad.findOne({ownerId:'222222222V',landId:'3'});
            expect(ad1).toEqual(ad2);
        });

        it('should return 401 if ad id is invalid',async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            res1 = await request(app).delete("/api/ads/1").set('x-auth', token);
            expect(res1.status).toBe(401);

        });

        it('should delete ad if it is user\s',async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            const ad1 = await Ad.findOne({ownerId:'111111111V',landId:'1'});

            res = await request(app).delete(`/api/ads/${ad1._id}`).set('x-auth', token);
            expect(res.status).toBe(200);

            ad2 = await Ad.findOne({ownerId:'111111111V',landId:'1'});
            expect(ad2).toBeNull();
        });

    });

});