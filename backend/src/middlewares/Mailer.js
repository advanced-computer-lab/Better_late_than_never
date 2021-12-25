var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport(
    
    {
    service: 'gmail',
    auth: {
        user: 'betterlatethannever1998@gmail.com',
        pass: 'Test_123'
    }
}
);

exports.sendMail = function (mailOptions) {
    console.log("pro", process.env.test)

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Email error: ' + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}