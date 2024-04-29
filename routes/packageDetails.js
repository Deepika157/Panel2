const express = require('express');
const router = express.Router();
const Package = require('../models/package');

router.post('/', async (req,res)=>{
    try{
        const { amount, No_of_days} = req.body;
        
        const package = new Package({
            amount,
            No_of_days
        });

        await package.save();

        res.status(201).send({ message: 'Package details saved successfully', data: package });

    } catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;