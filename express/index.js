const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// middleware Basics
// app.use('/', (req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Second middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Last middleware');
//   res.send('<h1>Welcome to Espress Js!</h1>');
// });

// app.use('/users', (req, res, next) => {
//   console.log('Users middleware');
//   res.send('<h1>Users Page!</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('Welcome middleware');
//   res.send('<h1>Welcome Page!');
// });


// working with middleware

app.use(bodyParser.urlencoded())

app.use('/add-products',(req,res,next)=>{
 res.send('<form action="/products" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
})

app.use('/products',(req,res)=>{
  console.log(req.body)
  res.redirect('/')
})

app.use('/',(req,res)=>{
    res.send('<h1>Hello from express</h1>')
    console.log("backend started")
})
app.listen(3000);

