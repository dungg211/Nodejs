const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express()
const port = 3000;

//config template engine
//console.log(process.env);
app.set('views',  './src/views/');
app.set('view engine', 'ejs');
//config static files css/js/images
//app.use(express.static('public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World')
})


app.get('/example', (req, res) => {
  res.render('example.ejs')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})