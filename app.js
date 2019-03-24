'use strict';

require('./db/db')
const express =  require('express');
const morgan = require('morgan');

var cors = require('cors')

//importing routes
const users = require('./routes/users');
const blockchain = require('./routes/blockchain');

const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use((req,res,next)=>{
    req.allowedUsers = [];
    next();
});


//static
app.use('/', express.static('dist'));

//routes
app.use('/api/users',users);
app.use('/api/blockchain',blockchain);

app.listen(4000,()=>{
    console.log('server started on port 4000');
});
