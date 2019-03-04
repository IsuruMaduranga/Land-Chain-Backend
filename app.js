'use strict';
require('./db/db')
const express =  require('express');
const morgan = require('morgan');

const app = express();
require('./blockchain/adminConnection');

//middlewear
app.use(morgan('tiny'));
app.use(express.json());

//static
app.use('/', express.static('dist'));

//routes





app.listen(4000,()=>{
    console.log('server started on port 4000');
});