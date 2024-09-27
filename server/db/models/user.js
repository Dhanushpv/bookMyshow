const mongoose = require('mongoose');


const shows = new mongoose.Schema({

    title:{
        type : String,
        // required :true,
    },
    rating:{
        type : String,
        // required :true,
    },
    image:{
        type : String,
    },

  category:{
        type :mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    language:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "language",
    },
});

let users = mongoose.model("shows",shows);
module.exports=users