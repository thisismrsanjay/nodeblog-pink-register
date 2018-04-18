const express = require('express');
const app =express();
const mongoose =require('mongoose');
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/nodeblog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('database connected');
});

//Bring Models
let  Article = require('./models/article');
let User = require('./models/user');

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    Article.find({},(err,articles)=>{
        if(err) {
            console.log(err);
        }else{
            res.render('index',{
                articles:articles
            })
        }
    })
})

app.use('/article',require('./routes/articles'));
app.use('/user',require('./routes/users'));











app.listen(3000);