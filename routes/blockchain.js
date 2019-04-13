const express = require('express');

const axios = require('axios');

//authentication middlewares
const {
  authenticate
} = require('../middleware/authenticate');
const {
  allowUser
} = require('../middleware/authenticate');
const {
  allowAdmin
} = require('../middleware/authenticate');

const router = express.Router();

router.post('/registerUser', allowAdmin, authenticate, async (req, res) => {

  axios.post('http://localhost:3000/api/CreateUser', {
    $class: "org.landchain.CreateUser",
    NIC: req.body.nic
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(JSON.stringify({
        error: true
      }));
    });

});

router.post('/registerLand', allowAdmin, authenticate, async (req, res) => {

  axios.post('http://localhost:3000/api/CreateUser', {
    $class: "org.landchain.CreateUser",
    NIC: req.body.ownerId
  })
    .then((response) => {
      return axios.post('http://localhost:3000/api/RegisterLand', {
        $class: "org.landchain.RegisterLand",
        id: req.body.id,
        size: req.body.size,
        ownerId: req.body.ownerId
      })
    }).then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(502).send({
        message: e.message
      });
    });

});

router.post('/changeOwner', allowAdmin, authenticate, async (req, res) => {

  axios.post('http://localhost:3000/api/CreateUser', {
    $class: "org.landchain.CreateUser",
    NIC: req.body.ownerId
  }).then(response => {
    return axios.post('http://localhost:3000/api/ChangeOwner', {
      $class: "org.landchain.ChangeOwner",
      landId: req.body.landId,
      newOwnerId: req.body.newOwnerId
    })
      .then(function (response) {
        res.send(response.data);
      })
      .catch(e => {
        res.status(502).send({
          message: e.message
        });
      });

  });
});

router.get('/users', allowAdmin, authenticate, async (req, res) => {

  axios.get('http://localhost:3000/api/User')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(e => {
      res.status(502).send({
        message: 'Blockchain error!'
      });
    });

});

router.get('/lands', allowAdmin, authenticate, async (req, res) => {

  axios.get('http://localhost:3000/api/Land')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(e => {
      res.status(502).send({
        message: 'Blockchain error!'
      });
    });

});

router.get('/landsOfUser', allowAdmin, allowUser, authenticate, async (req, res) => {

  axios.post('http://localhost:3000/api/getLandsByNIC', {
    $class: "org.landchain.getLandsByNIC",
    NIC: req.user.nic
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(502).json({
        message: 'Blockchain error!'
      })
    });
});

router.post('/landHistory', allowAdmin, allowUser, authenticate, async (req, res) => {

  axios.post('http://localhost:3000/api/getLandHistory', {
    $class: "org.landchain.getLandHistory",
    id: req.body.landId
  })
    .then(function (response) {
      if (response.data.length == 0) {
        throw new Error('History not availble');
      }
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(400).send({
        message: error.message
      });
    });
});

module.exports = router;