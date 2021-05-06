const express = require('express');
const massive = require('massive');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    SSL: {
        rejectUnauthorized: false
    }
})
    .then()
    .catch();

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}`))