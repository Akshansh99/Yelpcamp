var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/yelpcamp_database1', { useNewUrlParser: true, useUnifiedTopology: true, });

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var campground = mongoose.model("campground", campgroundSchema);

// campground.create({
//     name:"AKshanhs",
//     image:"https://i.ytimg.com/vi/Xm2d5E0xoCs/maxresdefault.jpg",
//     Description:"Nbfshsfjsvvfhfjfvfbsvjbvvn"
//     }
//     , function (err, campground) {
//         if (err) {
//             console.log("error");

//         }

//         else {
//             console.log(campground);
//         }
//     });

app.get("/", function (req, res) {
    res.render("landing.ejs");
});

app.get("/campgrounds", function (req, res) {
    campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log("Error");
        }

        else {
            res.render("index.ejs", { campgrounds: allCampgrounds });
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {
        name: name,
        image: image,
        description: req.body.description
    }

    //campgrounds.push(newCampgrounds);

    campground.create(newCampgrounds, function (err) {
        if (err) {
            console.log(err);
        }

        else {
            res.redirect("/campgrounds");
        }
    });


});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs")
});

app.get("/campgrounds/:id", function (req, res) {
    campground.findById(req.params.id, function (err, foundCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("show.ejs", { campground: foundCampgrounds });
        }
    })

});



app.listen(3000, function () {
    console.log("Server Started Successfully");
});
