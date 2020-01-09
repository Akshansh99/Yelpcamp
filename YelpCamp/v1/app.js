var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var campgrounds = [
    { name: "Delhi", image: "https://www.photosforclass.com/download/pixabay-1846142?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c722778dd924ac75b_960.jpg&user=Pexels" },
    { name: "Mumbai", image: "https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744e7d2c72d1904fc6_960.jpg&user=Free-Photos" },
    { name: "Chennai", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c722778dd924ac75b_960.jpg&user=fgmsp" },
    { name: "Kanpur", image: "https://www.photosforclass.com/download/pixabay-2650359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c722778dd924ac75b_960.jpg&user=piviso" },
    { name: "Jaipur", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c722778dd924ac75b_960.jpg&user=Pexels" },
    { name: "Chandigarh", image: "https://www.photosforclass.com/download/pixabay-1189929?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c722778dd924ac75b_960.jpg&user=Noel_Bauza" }
];

app.get("/", function (req, res) {
    res.render("landing.ejs");
});

app.get("/campgrounds", function (req, res) {


    res.render("campgrounds.ejs", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    var name=req.body.name;
    var image=req.body.image;

    var newCampgrounds={
        name:name,
        image:image
    }

    campgrounds.push(newCampgrounds);

    res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs")
});

app.listen(3000, function () {
    console.log("Server Started Successfully");
});
