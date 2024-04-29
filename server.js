const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const package = require('./routes/packageDetails');
const payment = require('./routes/paymentDetails');
const app = express();

mongoose.connect('mongodb://localhost:27017/panel2')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/package', package);
app.use('/payment', payment);

app.get('/', (req,res) => {
    res.send('Panel2');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
