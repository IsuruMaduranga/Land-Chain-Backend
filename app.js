'use strict';

require('./db/db')();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('config');
const app = express();


if (!config.get('jwtPK')) {
    console.error('FATAL ERROR: jwtPK is not defined!');
    process.exit(1);
}


//importing routes
const users = require('./routes/users');
const blockchain = require('./routes/blockchain');
const ads = require('./routes/ads');



//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use((req, res, next) => {
    req.allowedUsers = [];
    next();
});


//routes
app.use('/api/users', users);
app.use('/api/blockchain', blockchain);
app.use('/api/ads', ads);


const port = config.get("port");
const server = app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

module.exports = server;
