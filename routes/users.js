const express =require('express');
const router = express.Router();


let  User = require('../models/user');


//User Register Route
router.get('/register', (req, res) => {
    res.render('register');
})


router.post('/register',(req,res)=>{
    
      let errors = [] ;
      
      if(req.body.password != req.body.passwordConf){
          errors.push({text:'Password do not match'});
      }
      if(req.body.password.length<4){
          errors.push({text:'Password must be atleast 4 characters'});
      }
      var data = {
              errors:errors,
              name:req.body.name,
              email:req.body.email,
              username:req.body.username,
              password:req.body.password,
              passwordConf:req.body.passwordConf
          }

      if(errors.length>0){
          res.render('register',data)
      }else{
        //user email collision is not handeled yet
        User.create(data,(err,user)=>{
            if(err){
                console.log(err) ;
            }else{
                res.redirect('/login');
            }
        }) 
      }


})

router.get('/login',(req,res)=>{
    res.send('login page');
})





module.exports = router;