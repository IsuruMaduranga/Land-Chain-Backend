const express =  require('express');
const morgan = require('morgan');

const app = express();

//middlewear
app.use(morgan('tiny'));
app.use(express.json());

//static
app.use('/', express.static('dist'));





app.listen(3000,()=>{
    console.log('server started on port 3000');
});