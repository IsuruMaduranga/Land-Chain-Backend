const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/user');
const { Ad } = require('../../models/ad');
const axios = require('axios');

let app;

describe('/api/ads', () => {
    beforeAll(async () => {
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
            { ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100", status: "active" },
            { ownerId: "111111111V", landId: "2", city: "aaaa", phone: "1111111111", size: "100", price: "100", status: "active" },
            { ownerId: "222222222V", landId: "3", city: "aaaa", phone: "1111111111", size: "100", price: "100", status: "active" },
            { ownerId: "222222222V", landId: "4", city: "aaaa", phone: "1111111111", size: "100", price: "100", status: "active" },
            { ownerId: "222222222V", landId: "5", city: "aaaa", phone: "1111111111", size: "100", price: "100", status: "active" }
        ]);
    });

    afterEach(async () => {
        app.close();
    });

    describe('GET /', () => {

        it('should return 401 if client is not logged in', async () => {
            res = await request(app).get('/api/ads');
            expect(res.status).toBe(401);
        });

        it('should return all ads not belonged to the user', async () => {
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

        it('should return user\'s ads', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res = await request(app).get('/api/ads/my').set('x-auth', token);
            expect(res.status).toBe(200);
            res.body.forEach(ad => {
                expect(ad).toHaveProperty('ownerId', '111111111V');
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

        it('should not delete ad if it is not user\s', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            const ad1 = await Ad.findOne({ ownerId: '222222222V', landId: '3' });

            res1 = await request(app).delete(`/api/ads/${ad1._id}`).set('x-auth', token);
            expect(res1.status).toBe(401);

            ad2 = await Ad.findOne({ ownerId: '222222222V', landId: '3' });
            expect(ad1).toEqual(ad2);
        });

        it('should return 401 if ad id is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            res1 = await request(app).delete("/api/ads/1").set('x-auth', token);
            expect(res1.status).toBe(401);

        });

        it('should delete ad if it is user\s', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();

            const ad1 = await Ad.findOne({ ownerId: '111111111V', landId: '1' });

            res = await request(app).delete(`/api/ads/${ad1._id}`).set('x-auth', token);
            expect(res.status).toBe(200);

            ad2 = await Ad.findOne({ ownerId: '111111111V', landId: '1' });
            expect(ad2).toBeNull();
        });

    });


    describe('POST /', () => {

        it('should return 401 if client is not logged in', async () => {
            res = await request(app).post('/api/ads').send({landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            expect(res.status).toBe(401);
        });

        it('should return 403 if client is not allowed to post ads', async () => {
            const user = await User.findOne({ nic: "000000000V" });
            const token = user.generateAuthToken();
            res = await request(app).post('/api/ads').set('x-auth', token).send({landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            expect(res.status).toBe(403);
        });

        it('should return 400 if client is tried to post an ad for invalid land', async () => {
            const user = await User.findOne({ nic: "222222222V" });
            const token = user.generateAuthToken();
            res = await request(app).post('/api/ads').set('x-auth', token).send({landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            expect(res.status).toBe(400);
        });

        it('should return 400 if city is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "12jfj", phone: "1111111111", size: "100", price: "100" });
            res2 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "", phone: "1111111111", size: "100", price: "100" });
            res3 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", phone: "1111111111", size: "100", price: "100" });
            expect(res1.status).toBe(400);
            expect(res2.status).toBe(400);
            expect(res3.status).toBe(400);
        });

        it('should return 400 if phone is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaa", phone: "11111@jbdj", size: "100", price: "100" });
            res2 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaa", phone: "111111", size: "100", price: "100" });
            res3 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaa", phone: "11111166666666", size: "100", price: "100" });
            res4 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaa", phone: "", size: "100", price: "100" });
            res5 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaa", size: "100", price: "100" });
            expect(res1.status).toBe(400);
            expect(res2.status).toBe(400);
            expect(res3.status).toBe(400);
            expect(res4.status).toBe(400);
            expect(res5.status).toBe(400);
        });

        it('should return 400 if price is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "fvjb" });
            res2 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100.7" });
            res3 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "111@knjgb" });
            res4 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "" });
            res5 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100" });
            expect(res1.status).toBe(400);
            expect(res2.status).toBe(400);
            expect(res3.status).toBe(400);
            expect(res4.status).toBe(400);
            expect(res5.status).toBe(400);
        });

        it('should return 400 if size is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100jfjnvjn", price: "100" });
            res2 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "", price: "100" });
            res3 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", price: "100" });
            expect(res1.status).toBe(400);
            expect(res2.status).toBe(400);
            expect(res3.status).toBe(400);
        });

        it('should return 400 if landId is invalid', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "fvjn", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            res2 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            res3 = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
            expect(res1.status).toBe(400);
            expect(res2.status).toBe(400);
            expect(res3.status).toBe(400);
        });


        it('should return 403 if client is tried to post an ad for unowned land', async () => {
            try {
                await axios.post('http://localhost:3000/api/CreateUser', {
                    $class: "org.landchain.CreateUser",
                    NIC: "111111111V"
                });

                await axios.post('http://localhost:3000/api/RegisterLand', {
                    $class: "org.landchain.RegisterLand",
                    id: "1",
                    ownerId: "111111111V"
                });

                const user = await User.findOne({ nic: "222222222V" });
                const token = user.generateAuthToken();

                res = await request(app).post('/api/ads').set('x-auth', token).send({ landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
                expect(res.status).toBe(403);

                ad = await Ad.findOne({ ownerId: '111111111V', landId: '1' });
                expect(ad).not.toBeNull();
            } catch (e) {
                console.log(e.message);
            } finally {
                await axios.delete('http://localhost:3000/api/User/111111111V');
                await axios.delete('http://localhost:3000/api/Land/1');
            }
        }, 15000);


        it('should post ad if all are correct', async () => {
            try {
                await axios.post('http://localhost:3000/api/CreateUser', {
                    $class: "org.landchain.CreateUser",
                    NIC: "111111111V"
                });

                await axios.post('http://localhost:3000/api/RegisterLand', {
                    $class: "org.landchain.RegisterLand",
                    id: "1",
                    ownerId: "111111111V"
                });

                const user = await User.findOne({ nic: "111111111V" });
                const token = user.generateAuthToken();

                res = await request(app).post('/api/ads').set('x-auth', token).send({ ownerId: "111111111V", landId: "1", city: "aaaa", phone: "1111111111", size: "100", price: "100" });
                expect(res.status).toBe(200);

                ad = await Ad.findOne({ ownerId: '111111111V', landId: '1' });
                expect(ad).not.toBeNull();
            } catch (e) {
                console.log(e.message);
            } finally {
                await axios.delete('http://localhost:3000/api/User/111111111V');
                await axios.delete('http://localhost:3000/api/Land/1');
            }
        }, 15000);


    });

});