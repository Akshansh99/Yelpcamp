var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var campgrounds = [
    { name: "Delhi", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/06/main/fall-camping-best-campgrounds-organ-pipe-cactus-national-monument-twin-peaks-1115.jpg" },
    { name: "Mumbai", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg" },
    { name: "Chennai", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/hill-end-historic-site/village-campground/village-campground-007.jpg" },
    { name: "Jaipur", image: "https://www.tripsavvy.com/thmb/nZ6IjP15ygno63xYBCHv7pZBySU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/camping-and-tent-under-the-pine-forest-in-sunset-at-pang-ung--pine-forest-park---mae-hong-son--north-of-thailand-638237742-5ab25b2cfa6bcc00365e2824.jpg" },
    { name: "Delhi", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/06/main/fall-camping-best-campgrounds-organ-pipe-cactus-national-monument-twin-peaks-1115.jpg" },
    { name: "Mumbai", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg" },
    { name: "Chennai", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/hill-end-historic-site/village-campground/village-campground-007.jpg" },
    { name: "Jaipur", image: "https://www.tripsavvy.com/thmb/nZ6IjP15ygno63xYBCHv7pZBySU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/camping-and-tent-under-the-pine-forest-in-sunset-at-pang-ung--pine-forest-park---mae-hong-son--north-of-thailand-638237742-5ab25b2cfa6bcc00365e2824.jpg" }
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
