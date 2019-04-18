const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const { User } = require('../models/user');


//authentication middlewares
const { authenticate } = require('../middleware/authenticate');
const { allowUser } = require('../middleware/authenticate');
const { allowAdmin } = require('../middleware/authenticate');

const router = express.Router();

router.post('/signup', async (req, res) => {

    const body = _.pick(req.body, ['nic', 'email', 'password', 'firstName', 'lastName']);
    body.type = "user";
    const user = new User(body);

    const err = user.validateSync();

    if (!err) {

        axios.post('http://localhost:3000/api/CreateUser', {
            $class: "org.landchain.CreateUser",
            NIC: req.body.nic
        })
            .then((response) => {
                return user.save();
            })
            .then(() => {
                return user.generateAuthToken();
            }).then((token) => {
                res.json({ token: token });
            })
            .catch(e => {
                if (e.code == "11000") {
                    res.status(400).send({ message: "NIC or email already exists!" });
                } else {
                    res.status(400).send({ message: e.message });
                }
            });
    } else {
        res.status(400).send({ message: err.message });
    }


});

router.post('/registerAdmin', allowAdmin, authenticate, async (req, res) => {

    const body = _.pick(req.body, ['nic', 'email', 'password', 'firstName', 'lastName']);
    body.type = "admin";
    const user = new User(body);

    const err = user.validateSync();

    if (!err) {
        user.save().then(() => {
            res.json({ token: true });
        })
            .catch(e => {
                if (e.code == "11000") {
                    res.status(400).send({ message: "NIC or email already exists!" });
                } else {
                    res.status(400).send({ message: e.message });
                }
            });


    } else {
        res.status(400).send({ message: err.message });
    }



});

router.post('/login', async (req, res) => {
    const body = _.pick(req.body, ['nic', 'password'])

    User.findByCredentials(body.nic, body.password).then(user => {
        let token = user.generateAuthToken();
        res.json({ token: token });
    }).catch(e => {
        res.status(400).json({ message: "Invalid NIC or password!" });
    })

});

module.exports = router;

