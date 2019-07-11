const express = require("express");
const router = express.Router();
const Place = require("../models/Place");
const People = require("../models/People");
const Comment = require("../models/Discussion");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { layout: false });
});

router.get("/api/wonders", (req, res, next) => {
  Place.find({})
    // .select("location.coordinates") // selects only certain fields
    .sort({ name: 1 }) // sorts by name
    .limit(10) // limits to the first 10 results
    .then(places => {
      res.json(places);
      // const coordinates = places.map(place => place.location.coordinates)
      // res.json(places)
    });
});

router.post("/wonders", (req, res, next) => {
  const { name, img, city, street, latitude, longitude } = req.body;

  Place.create({
    name,
    city,
    street,
    imageUrl: img,
    location: {
      type: "Point",
      coordinates: [latitude, longitude]
    }
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

router.post("/add-point/:peopleId", (req, res, next) => {
  console.log("this is SDADKALSDM", req.body);
  const peopleId = req.params.peopleId;
  People.findOneAndUpdate(
    { _id: peopleId },
    {
      xposition: req.body.xvalue,
      yposition: req.body.yvalue,
      _user: req.user._id
    },
    { new: true }
  ).then(data => {
    console.log(data);
  });
});

////

router.post("/add-point-comment/:commentId", (req, res, next) => {
  console.log("this is COMMENTS", req.body);
  const commentId = req.params.commentId;
  Comment.findOneAndUpdate(
    { _id: commentId },
    { xposition: req.body.xvalue, yposition: req.body.yvalue },
    { new: true }
  ).then(data => {
    console.log("hello");
  });
});

module.exports = router;

////

/////
