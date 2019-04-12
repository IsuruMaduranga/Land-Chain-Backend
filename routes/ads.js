const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const {mongoose} = require('../db/db');
const {Ad} = require('../models/ad');


//authentication middlewares
const {authenticate} = require('../middleware/authenticate');
const {allowUser} = require('../middleware/authenticate');
const {allowAdmin} = require('../middleware/authenticate');

const router = express.Router();

router.post('/', allowUser, authenticate, async (req, res) => {

  axios.get(`http://localhost:3000/api/Land/${req.body.landId}`)
    .then(function (response) {
      return response.data;
    })
    .then(land=>{
        if(!(req.user.nic === land.owner.slice(-10,) & land.status === "VALID") ){
            throw new Error('Unauthorized');
        }
        const data = _.pick(req.body,['landId','size','phone','price','city','description']);
        data.ownerId = req.user.nic;
        const ad = new Ad(data);

        return ad.save();
    }).then(response=>{
        res.send(response);
    })
    .catch(function (error) {
        console.log(error);
      res.send(JSON.stringify({
        error: true,
        msg: error.message
      }));
    });

});

router.get('/', allowUser,allowAdmin, authenticate, async (req, res) => {

  Ad.getAllAds(req.user.nic).then(ads=>{
    res.send(ads);
  })
  .catch(e=>{
    res.status(504)
    res.json({
      error:true,
      msg: "Database error"
    })
  })

});

router.get('/my', allowUser,allowAdmin, authenticate, async (req, res) => {

  Ad.getAds(req.user.nic).then(ads=>{
    res.send(ads);
  })
  .catch(e=>{
    res.status(504)
    res.json({
      error:true,
      msg: "Database error"
    })
  })

});

module.exports = router;