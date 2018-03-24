var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'str8inthebin@gmail.com',
        pass: 'e!6%4aznENs%'
    }
});

var mailOptions = {
    from: 'str8inthebin@gmail.com',
    to: 'junkmesend@gmail.com',
    subject: 'Sending email using node',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

