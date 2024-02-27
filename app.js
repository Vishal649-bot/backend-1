const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const success = require('./routes/success');
 
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(success);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));

});

app.listen(3000);
