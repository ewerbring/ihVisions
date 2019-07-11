const express = require("express");
const router = express.Router();
const Place = require("../models/Place");
const Comment = require("../models/Discussion");
const Subcomment = require("../models/Subcomment");
const People = require("../models/People");

/* GET home page */
router.get("/list", (req, res, next) => {
  Place.find()
    .then(data => res.render("projectfolder/index", { data }))
    .catch(err => console.log("this is an error finding places", err));
});

router.get("/:id", (req, res, next) => {
  const currProj = req.params.id;
  Place.findById(currProj)
    .populate([
      {
        path: "comments",
        model: "Comment",
        populate: {
          path: "subcomment",
          model: "Subcomment",
          populate: { path: "_user", model: "User" }
        }
      },
      { path: "people", model: "People" }
    ])
    .then(data => {
      console.log(data);
      res.render("projectfolder/project", { data: data, userId: req.user._id });
    })
    .catch(err => console.log("catching", err));
});

router.post("/", (req, res, next) => {
  const { name, city, street, img, latitude, longitude, infoLink } = req.body;

  const people = Array.from({ length: 17 }).map((_, i) => {
    return {
      imgPath: `images/${i + 1}Arkiv.png`
      // _user: req.user._id
    };
  });
  People.insertMany(people)
    .then(dbPeople => {
      const ids = dbPeople.map(el => el._id);
      return Place.create({
        name,
        city,
        street,
        imageUrl: img,
        infoLink,
        location: {
          type: "Point",
          coordinates: [latitude, longitude]
        },
        people: ids
      });
    })
    .then(() => {
      res.redirect("/project/list");
    })
    .catch(err => {
      next(err);
    });
});

////POST COMMENTS

router.post("/comment/:id", (req, res, next) => {
  const { comment, topic } = req.body;

  Comment.create({
    topic,
    comment,
    _user: req.user._id
  })
    .then(comment => {
      res.redirect("back");
      Place.findByIdAndUpdate(req.params.id, {
        $push: { comments: comment._id }
      }).then(data => console.log("hello"));
    })
    .catch(err => {
      next(err);
    });
});

router.post("/subcomment/:id", (req, res, next) => {
  const { subcomment } = req.body;

  Subcomment.create({
    subcomment,
    _user: req.user._id
  })
    .then(subcomment => {
      Comment.findByIdAndUpdate(req.params.id, {
        $push: { subcomment: subcomment._id }
      }).then(data => res.redirect("back"));
    })
    .catch(err => {
      next(err);
    });
});

///DISPLAY COMMENT

///DISPLAY COMMENT

module.exports = router;
