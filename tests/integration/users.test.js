const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/user');
const { Ad } = require('../../models/ad');
const axios = require('axios');

let app;

describe('/api/users', () => {

    beforeEach(async () => {
        app = require('../../app');
        await User.deleteMany({});
        await User.insertMany([
            { nic: "000000000V", firstName: "admin", lastName: "admin", email: "admin@landchain.com", password: "123456", type: "admin" },
            { nic: "111111111V", firstName: "user", lastName: "user", email: "user1@landchain.com", password: "123456", type: "user" },
            { nic: "222222222V", firstName: "user", lastName: "user", email: "user2@landchain.com", password: "123456", type: "user" }
        ]);

    });

    afterEach(async () => {
        app.close();
    });

    describe('POST /login', () => {
        it('should return 400 if invalid id provided', async () => {
            res1 = await request(app).post('/api/users/login').send({ nic: "333333333V", password: "123456" });
            res3 = await request(app).post('/api/users/login').send({ nic: "3333wdbvhV", password: "123456" });
            expect(res1.status).toBe(400);
            expect(res3.status).toBe(400);
        });
        it('should return 400 if invalid password provided', async () => {
            res2 = await request(app).post('/api/users/login').send({ nic: "222222222V", password: "1234567" });
            expect(res2.status).toBe(400);
        });
        it('should return 400 if no id provided', async () => {
            res4 = await request(app).post('/api/users/login').send({ password: "123456" });
            expect(res4.status).toBe(400);
        });
        it('should return 400 if invalid password provided', async () => {
            res5 = await request(app).post('/api/users/login').send({ nic: "333333333V" });
            expect(res5.status).toBe(400);
        });
    });

    describe('POST /signup', () => {

        const exec = async function(data){
            res = await request(app).post('/api/users/signup').send(data);
            expect(res.status).toBe(400);
        }

        it('should return 400 if invalid nic provided', async () => {
            await exec({ nic: "0000000V", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "000000000000V", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "000llllllV", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ firstName: "admin", lastName: "admin", email: "adn@landchain.com", password: "123456" });
        },15000);

        it('should return 400 if invalid firstName provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin888", lastName: "admin", email: "adm@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "", lastName: "admin", email: "adm@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", lastName: "admin", email: "adm@landchain.com", password: "123456" });
        },15000);

        it('should return 400 if invalid lastName provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin9999", email: "adn@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "", email: "adn@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", email: "admn@landchain.com", password: "123456" });
        });

        it('should return 400 if invalid email provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adnlandchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admnl@andchaincom", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", password: "123456" });
        });

        it('should return 400 if short/no/invalid password provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adm@landchain.com", password: "1234" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admn@landchain.com", password: "" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adn@landchain.com" });
        });

        it('should return 400 if nic that already exists provided', async () => {
            await exec({ nic: "111111111V", firstName: "admin", lastName: "admin", email: "adn@landchain.com", password: "123456" });
        });

        it('should return 400 if email that already exists provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admin@landchain.com", password: "123456" });
        });

        it('should save user if all are correct', async () => {
            res1 = await request(app).post('/api/users/signup').send({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "user3@landchain.com", password: "123456" });
            expect(res1.status).toBe(200);
            user = User.findOne({nic:'333333333V'});
            expect(user).not.toBeNull();
        });

    });

    describe('POST /registerAdmin', () => {

        const exec = async function(data){
            const user = await User.findOne({ nic: "000000000V" });
            const token = user.generateAuthToken();
            res = await request(app).post('/api/users/registerAdmin').set('x-auth', token).send(data);
            expect(res.status).toBe(400);
        }

        it('should return 400 if invalid nic provided', async () => {
            await exec({ nic: "0000000V", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "000000000000V", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "000llllllV", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ nic: "", firstName: "admin", lastName: "admin", email: "a@landchain.com", password: "123456" });
            await exec({ firstName: "admin", lastName: "admin", email: "adn@landchain.com", password: "123456" });
        },15000);

        it('should return 400 if invalid firstName provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin888", lastName: "admin", email: "adm@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "", lastName: "admin", email: "adm@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", lastName: "admin", email: "adm@landchain.com", password: "123456" });
        },15000);

        it('should return 400 if invalid lastName provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin9999", email: "adn@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "", email: "adn@landchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", email: "admn@landchain.com", password: "123456" });
        });

        it('should return 400 if invalid email provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adnlandchain.com", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admnl@andchaincom", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "", password: "123456" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", password: "123456" });
        });

        it('should return 400 if short/no/invalid password provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adm@landchain.com", password: "1234" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admn@landchain.com", password: "" });
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "adn@landchain.com" });
        });

        it('should return 400 if nic that already exists provided', async () => {
            await exec({ nic: "111111111V", firstName: "admin", lastName: "admin", email: "adn@landchain.com", password: "123456" });
        });

        it('should return 400 if email that already exists provided', async () => {
            await exec({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admin@landchain.com", password: "123456" });
        });

        it('should return 403 if non admin user tried', async () => {
            const user = await User.findOne({ nic: "111111111V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/users/registerAdmin').set('x-auth', token).send({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admin2@landchain.com", password: "123456" });
            expect(res1.status).toBe(403);
            user1 = User.findOne({nic:'333333333V'});
            expect(user1).not.toBeNull();
        });

        it('should save admin if all are correct', async () => {
            const user = await User.findOne({ nic: "000000000V" });
            const token = user.generateAuthToken();
            res1 = await request(app).post('/api/users/registerAdmin').set('x-auth', token).send({ nic: "333333333V", firstName: "admin", lastName: "admin", email: "admin2@landchain.com", password: "123456" });
            expect(res1.status).toBe(200);
            user1 = User.findOne({nic:'333333333V'});
            expect(user1).not.toBeNull();
        });

    });

    

});