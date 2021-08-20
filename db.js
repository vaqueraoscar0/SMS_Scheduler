const mysql = require('mysql');
//const SMSMessage = require('./SMSMessage');

//Creating a connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR USERNAME',
    password: 'YOUR PASSWORD',
    database:  'YOUR DATABASE NAME',
    port: 'YOU PORT NUMBER'
})

//Connect to mysql || connecting to our DATABASE && Checking for Errors/Issues
const connection = () =>{
    con.connect(function (err) {
        if (err) throw err;

        console.log("Connected to the Database");
    });
}

const getData = () => {
    const currentTime = new Date().toTimeString().substring(0, 8);
    var sql = "SELECT * FROM clients WHERE time = ?";
    con.query(sql, [currentTime], function (err, result) {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
            SMSMessage.SendScheduledMessage(result[0].phonenumber, result[0].data1);
            console.log(`SMS Sent to: ${result[0].username} At: ${currentTime}`);
        }

    })
}

module.exports = {
    connection: connection,
    getData: getData
};