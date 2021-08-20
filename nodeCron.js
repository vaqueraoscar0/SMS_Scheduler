const cron = require('node-cron');
const db = require('./db');

let number = 7;
db.connection();

cron.schedule(`*/${number} * * * * *`, () =>{
    db.getData();
})