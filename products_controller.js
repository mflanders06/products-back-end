const create = (req, res) => {
    const {
        name,
        description,
        price,
        image
    } = req.body;
    
    const db = req.app.get('db');

    db.create_product(name, description, price, image)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

const getAll = (req, res) => {
    const db = req.app.get('db');

    db.read_products()
        .then((products) => {
            res.status(200).json(products)
        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

const getOne = (req, res) => {
    const { product_id } = req.params

    const db = req.app.get('db');

    db.read_product(product_id)
        .then((product) => {
            res.status(200).json(product)
        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

const update = (req, res) => {

    const { product_id } = req.params;
    const { description } = req.body;
    console.log(product_id, description);
    const db = req.app.get('db');

    db.update_product(description, +product_id)
        .then(() => {
            res.sendStatus(200);

        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

const deleteProduct = (req, res) => {
    const { product_id } = req.params;

    const db = req.app.get('db');

    db.delete_product(product_id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((e) => {
            res.status(500).json(e);
        })
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteProduct
}