const express = require('express');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const app = express();
const port =3000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())
// static file run sa http://localhost:3000/static/index.js

app.set('view engine' , 'pug');
app.set('views', path.join( __dirname,'/views'));



app.get('/', (req, res)  => {
    // res.render('demo',{'title':'king' ,'message':'we are won'});
    const params = {}
    res.render('index.pug',params)
});
// http://localhost:3000/demo 

app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    let outTOwrite = `the name is ${name}. age is ${age}. gender is ${gender}. adress is ${address}. mor is : ${more}`
    fs.writeFileSync('output.txt',outTOwrite)
    const params = {'messsage':'form has been submitted'}
    res.render('index.pug',params)
})



app.listen(port, () => {
    console.log('here running at port number 3000');
})