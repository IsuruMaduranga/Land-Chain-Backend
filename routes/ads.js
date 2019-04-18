const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const { Ad } = require('../models/ad');


//authentication middlewares
const { authenticate } = require('../middleware/authenticate');
const { allowUser } = require('../middleware/authenticate');
const { allowAdmin } = require('../middleware/authenticate');

const router = express.Router();

router.post('/', allowUser, authenticate, async (req, res) => {
  const data = _.pick(req.body, ['landId', 'size', 'phone', 'price', 'city']);
  data.ownerId = req.user.nic;
  const ad = new Ad(data);

  const err = ad.validateSync();

  if(!err){
    axios.get(`http://localhost:3000/api/Land/${req.body.landId}`)
    .then(function (response) {
      return response.data;
    })
    .then(land => {
      if (!(req.user.nic === land.owner.slice(-10) & land.status === "VALID")) {
        throw new Error('Forbidden');
      }

      return ad.save();
    }).then(response => {
      res.send(response);
    })
    .catch(function (error) {
      if (error.message === 'Forbidden') {
        res.status(403).json({ message: error.message });
      } else {
        res.status(400).json({ message: error.message });
      }
    });
  }else{
    res.status(400).json({ message: err.message });
  }
  

});

router.get('/', allowUser, allowAdmin, authenticate, async (req, res) => {

  Ad.getAllAds(req.user.nic).then(ads => {
    res.send(ads);
  })
    .catch(e => {
      res.status(504)
      res.json({
        message: "Database error"
      })
    })

});

router.get('/my', allowUser, authenticate, async (req, res) => {

  Ad.getAds(req.user.nic).then(ads => {
    res.send(ads);
  })
    .catch(e => {
      res.status(504)
      res.json({
        message: "Database error"
      })
    })

});

router.delete('/:id', allowUser, authenticate, async (req, res) => {
  Ad.findOne({ _id: req.params.id })
    .then(ad => {
      if (ad.ownerId === req.user.nic) {
        return Ad.deleteOne({ _id: req.params.id })
      } else {
        throw new Error('Unauthorized')
      }
    })
    .then(ad => {
      res.send(ad);
    })
    .catch(e => {
      res.status(401)
      res.json({
        message: "Unauthorized"
      })
    })

});

module.exports = router;