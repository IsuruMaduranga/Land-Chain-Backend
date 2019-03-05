const axios = require('axios');

let createUser = function(nic){

    axios.post('http://localhost:3000/api/User',{
        $class: "org.landchain.CreateUser",
        NIC: nic
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
    
}

let registerLand = function(id,ownerId){

    axios.post('http://localhost:3000/api/RegisterLand',{
        "$class": "org.landchain.RegisterLand",
        id: id,
        ownerId: ownerId
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
    
}


