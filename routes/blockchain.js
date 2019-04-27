const express = require('express');

const axios = require('axios');
const config = require('config');

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

  axios.post(`${config.get("blockchain")}/api/CreateUser`, {
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

  axios.post(`${config.get("blockchain")}/api/CreateUser`, {
    $class: "org.landchain.CreateUser",
    NIC: req.body.ownerId
  })
    .then((response) => {
      return axios.post(`${config.get("blockchain")}/api/RegisterLand`, {
        $class: "org.landchain.RegisterLand",
        id: req.body.id,
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

  axios.post(`${config.get("blockchain")}/api/CreateUser`, {
    $class: "org.landchain.CreateUser",
    NIC: req.body.ownerId
  }).then(response => {
    return axios.post(`${config.get("blockchain")}/api/ChangeOwner`, {
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

router.post('/divideLand', allowAdmin, authenticate, async (req, res) => {

  axios.post(`${config.get("blockchain")}/api/DivideLand`, {
      $class: "org.landchain.DivideLand",
      oldLandId: req.body.landId,
      newIds: req.body.newIds
  }).then(response => {
    res.send(response.data);
  })
  .catch(e => {
    res.status(502).send({
      message: e.message
    });
  });

});

router.get('/users', allowAdmin, authenticate, async (req, res) => {

  axios.get(`${config.get("blockchain")}/api/User`)
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

  axios.get(`${config.get("blockchain")}/api/Land`)
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

  axios.post(`${config.get("blockchain")}/api/getLandsByNIC`, {
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

  axios.post(`${config.get("blockchain")}/api/getLandHistory`, {
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