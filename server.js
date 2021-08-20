const express = require('express');
const app = express();
require('./nodeCron');

app.get('/', (req,res) => {
    res.send('Hello, World!')
});

app.listen('3000', () =>{
    console.log('App is listening on port 3000')
});