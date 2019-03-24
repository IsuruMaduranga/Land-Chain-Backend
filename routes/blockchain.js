const express =  require('express');

const axios = require('axios');

//authentication middlewares
const {authenticate} =  require('../middleware/authenticate');
const {alloweUser} =  require('../middleware/authenticate');
const {allowAdmin} =  require('../middleware/authenticate');

const router = express.Router();

router.post('/registerUser',allowAdmin,authenticate,async (req,res)=>{

    axios.post('http://localhost:3000/api/User',{
        $class: "org.landchain.CreateUser",
        NIC: req.body.nic
      })
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(JSON.stringify({error:true}));
      });

});

router.post('/registerLand',allowAdmin,authenticate,async (req,res)=>{

    axios.post('http://localhost:3000/api/RegisterLand',{
        "$class": "org.landchain.RegisterLand",
        id: req.body.id,
        ownerId: req.body.ownerId
      })
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(JSON.stringify({error:true}));
      });

});

router.post('/changeOwner',allowAdmin,authenticate,async (req,res)=>{

    axios.post('http://localhost:3000/api/ChangeOwner',{
        $class: "org.landchain.ChangeOwner",
        landId: req.body.landId,
        newOwnerId: req.body.newOwnerId
      })
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(JSON.stringify({error:true}));
      });

});

router.get('/users',allowAdmin,authenticate,async (req,res)=>{

    axios.get('http://localhost:3000/api/User')
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(JSON.stringify({error:true}));
      });

});

router.get('/lands',async (req,res)=>{

    axios.get('http://localhost:3000/api/Land')
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(JSON.stringify({error:true}));
      });

});





 
module.exports = router;

