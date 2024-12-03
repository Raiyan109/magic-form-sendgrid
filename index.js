const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()
const sendEmail = require('./utils/sendEmail')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/test-email', async (req, res) => {
    try {
        await sendEmail({
            //the client email 
            to: 'raiyankabir72@gmail.com',
            //sendGrid sender id 
            from: 'kraiyan109@gmail.com',
            subject: 'Does this work?',
            text: 'Glad you are here .. yes you!',
            html: '<strong>It is working!!</strong>'
        });
        res.sendStatus(200);
    } catch (e) {
        console.log(e, 'error from sendgrid');
        res.sendStatus(500);
    }
});

// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server listening on ${process.env.PORT}`)
})
// })
// .catch((error) => {
//     console.log(error)
// })
