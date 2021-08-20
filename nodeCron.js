const cron = require('node-cron');
const db = require('./db');

let seconds = 1;
db.connection();

cron.schedule(`*/${seconds} * * * * *`, () =>{
    db.getData();
})