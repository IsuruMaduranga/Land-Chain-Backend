'use strict';

require('./db/db')
const express =  require('express');
const morgan = require('morgan');

//importing routes
const users = require('./routes/users');

const app = express();

//middlewear
app.use(morgan('tiny'));
app.use(express.json());

// //static
// app.use('/', express.static('dist'));

//routes
app.use('/api/users',users);






app.listen(4000,()=>{
    console.log('server started on port 4000');
});