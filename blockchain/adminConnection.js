'use strict';

// Need the card store instance
const AdminConnection = require('composer-admin').AdminConnection;

// Used as the card for all calls
const   cardNameForPeerAdmin   = "PeerAdmin@hlfv1";
const   cardNameForNetworkAdmin   = "admin@land_chain";
const   appToBePinged = "land_chain";

// 1. Create Admin Connection object for the fabric
var walletType = { type: 'composer-wallet-filesystem' }
var adminConnection = new AdminConnection(walletType);

// 2. Initiate a connection as PeerAdmin
let adminConnection =  adminConnection.connect(cardNameForPeerAdmin).then().catch((error)=>{
    console.log(error);
});

module.exports = {
    adminConnection
}


