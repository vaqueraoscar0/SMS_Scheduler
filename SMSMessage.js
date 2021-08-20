require('dotenv').config();

const SendScheduledMessage = (phoneNumber, bodytxt) =>{
    const from = process.env.PHONE_NUMBER;
    const twilio = require('twilio')(
        process.env.TOKEN_SID,
        process.env.TOKEN_SECRET,
        {
            accountSid: process.env.ACCOUNT_SID
        }
    );

    twilio.messages.create({
        from,
        to: phoneNumber,
        body: bodytxt
    })
        .then(message => console.log(`Message sent with SID ${message.sid}`))
        .catch(err => console.log(err));

    //console.log('Message sent:', phoneNumber);
}

module.exports = {
    SendScheduledMessage: SendScheduledMessage
}