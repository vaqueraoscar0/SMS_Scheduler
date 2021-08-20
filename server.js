const express = require('express');
const db = require("./db");
//const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello, World!')
    db.getData()
});

app.listen('3000', () =>{
    console.log('App is listening on port 3000')
});