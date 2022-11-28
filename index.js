const express=require('express');
const bodyParser = require('body-parser');
const app= express();
const routes= require('./routes/route');
app.use('/',routes);
app.use('/images',express.static('/images'));
app.use(bodyParser.urlencoded({extended:true}));
let element=require("./module/connection");
try {
     element.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.listen(8080)