
const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');
const Package = require('../models/package');

router.post('/', async (req,res)=>{
    try{
        
     const allDetails = await Package.find({}, 'amount No_of_days');

      const detail = allDetails.map(news => `${news.amount}  ${news.No_of_days}`);
        const payment = new Payment({
           username: req.body.username,
           packageID: req.body.packageID,
           packageDetails: detail
        });

        await payment.save();

        res.status(201).send({ message: 'Payment details saved successfully', data: payment });

    } catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;