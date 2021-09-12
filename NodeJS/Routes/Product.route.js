const express = require('express');
const Product = require('../Models/Product.model');

const router = express.Router();

// Get all products
router.get('/', async (req, res, next) => {
    try {
        const results = await Product.find();
        if (results) {
            res.send(results);
        }
        else res.send("No items available.");
    } catch (error) {
        res.send(error.message);
    }
})
//router.get('/',(req,res,next)=>{
//    //next(new Error("Unable to fetch")); // not setting any status
//    res.send("In get /");
//})

// Post a product
router.post('/', (req, res, next) => {

    const product = new Product({
        name: req.query.name,
        price: req.query.price,
        description: req.query.description,
    });

    product.save().then(result => {
        res.send(result);
    }).catch(err => {
        res.send("Error : " + err);
    })


})

// Get product by id

router.get('/:id', async (req, res, next) => {
    try {
        const results = await Product.findById(req.params.id);
        if (results) {
            res.send(results);
        }
        else res.send("No items available of the given id.");
    } catch (error) {
        res.send(error);
    }
})
//router.get('/:id',(req,res,next)=>{
//    res.send("In get /:id");
//})



// Delete product by id
router.delete('/:id', async (req, res, next) => {
    try {
        const results = await Product.findById(req.params.id);
        // results = await Product.findByIdAndDelete(req.params.id) can also be used and results can be returned
        if (results) {
            await Product.deleteOne(results);
            res.send("Deleted");
        }
        else res.send("No items available of given id to delete.");

    } catch (error) {
        res.send(error.message);
    }
})



// Patch product by id
router.patch('/:id', async (req, res, next) => {
    try {
        const Pname = req.query.name;
        const Pprice = req.query.price;
        const Pdesc = req.query.description;
        const results = await Product.findById(req.params.id);

        if (results) {
            if (Pname) {
                await Product.updateOne(results, { 'name': Pname });
            }
            if (Pprice) {
                await Product.updateOne(results, { price: Pprice });
            }
            if (Pdesc) {
                await Product.updateOne(results, { 'description': Pdesc });
            }
            res.send("Updated Successfully");
        }
        else res.send("No items available of given id to update.");

        // updates = req.params
        // results = await Product.findByIdAndUpdate(req.params.id, updates) can also be used and results can be returned

    } catch (error) {
        res.send(error.message);
    }
})




module.exports = router;