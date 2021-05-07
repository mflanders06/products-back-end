
const express = require('express');
const massive = require('massive');
const dotenv = require('dotenv');

const { create } = require('./products_controller');
const { getAll } = require('./products_controller');
const { getOne } = require('./products_controller');
const { update } = require('./products_controller');
const { deleteProduct } = require('./products_controller');

dotenv.config();
const app = express();
app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('Successfully established connection with remote database')
    })
    .catch((e) => {
        console.log(e);
        return e;
    });

    app.post('/api/products', create);
    app.get('/api/products', getAll);
    app.get('/api/products/:product_id', getOne);
    app.put('/api/products/:product_id', update);
    app.delete('/api/products/:product_id', deleteProduct);

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}`))