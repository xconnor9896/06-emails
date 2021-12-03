// create function that returns a json with success
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mekhi.stark71@ethereal.email',
            pass: 'qXEFgVCAQTmHdPvCJS'
        }
    });

    let info = await transporter.sendMail({
        to: 'cjkobriger@gmail.com',
        from: 'obamna@usa.gov',
        replyTo: "yomamashouse@usa.gov",
        subject: "New Password",
        html: '<h1>YOUR MOTHER</h1><p>is in <em>MY HOUSE!!!11!!!</em></p>'
    })

    res.json(info)
}

const resetEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mekhi.stark71@ethereal.email',
            pass: 'qXEFgVCAQTmHdPvCJS'
        }
    });

    let randomPassword = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);

    let info = await transporter.sendMail({
        to: 'cjkobriger@gmail.com',
        from: 'obamna@usa.gov',
        replyTo: "yomamashouse@usa.gov",
        subject: "New Password",
        html: `<h1>New Password</h1><p>your password is ${randomPassword}</p>`
    })

    res.json(info)
}

module.exports = { sendEmail, resetEmail };

