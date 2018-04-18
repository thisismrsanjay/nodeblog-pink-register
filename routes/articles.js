const express =require('express');
const router = express.Router();

let  Article = require('../models/article');



router.get('/add',(req,res)=>{
    res.render('add');
})

router.post('/add',(req,res)=>{
    let article = new Article();
    article.title = req.body.title;
    article.category = req.body.category;
    article.author = req.body.author;
    article.body = req.body.body;
    article.date = new Date();
    

    article.save((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
})

module.exports = router;