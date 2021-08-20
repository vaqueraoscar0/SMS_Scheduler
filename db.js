const mysql = require('mysql');
//const SMSMessage = require('./SMSMessage');

//Creating a connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:  'Cron-Scheduler',
    port: 8889
})

//Connect to mysql || connecting to our DATABASE && Checking for Errors/Issues
const connection = () =>{
    con.connect(function (err) {
        if (err) throw err;

        console.log("Connected to the Database");
    });
}


//Selecting users from the database & send
const getData = () => {
    const time2 = new Date().toTimeString().substring(0, 8);
    var sql = "SELECT * FROM clients WHERE time = ?";
    con.query(sql, [time2], function (err, result) {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
            const time = result[i].time;
            console.log(time)
            console.log(time2)
        }
        console.log(time2)
        //SMSMessage.SendScheduledMessage(result[0].phonenumber, result[0].data1);

    })
}

module.exports = {
    connection: connection,
    getData: getData
};