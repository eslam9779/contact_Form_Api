const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eslamabdo9779@gmail.com',
            pass: 'vhku dazw ybbt sdix',
        },

    });

    const mailOptions = {

        from: formData.email,
        to: 'eslamabdo9779@gmail.com',
        subject: formData.subject,
        text: `${formData.message}
        
        from:${formData.email}
        note: Sent from my portfolio Contact form to my gmail.
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.send("error : "+err);

        }
        else {
            res.send("Form Submitted Successfully");
        }
    })
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
