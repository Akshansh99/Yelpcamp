var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true, useUnifiedTopology: true, });


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var cat = mongoose.model("cat", catSchema);

var george = new cat({
    name: "George",
    age: 14,
    temperament: "Cool"

});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    }

    else{
        console.log("We saved a cat");
        console.log(cat);
    }
});