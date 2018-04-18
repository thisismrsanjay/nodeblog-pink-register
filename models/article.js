const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    author:{
        type:String
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('article',ArticleSchema);
