const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const router = express.Router();
const Title = require("./models/Titles");

//// AUTH ROUTES

router.get("/api/title/onetitle", async function(req, res) {
  console.log("fetch called");
  const atitle = await Title.findOne();
  // console.log('fetched');
  res.send(atitle);
});

router.get("/api/title/:id", async function(req, res) {
  console.log("fetching id");
  console.log(req.params.id);

  Title.findOne({
    TitleId: +req.params.id
  }).then(title => {
    // console.log(title);
    res.send(title);
  });
});

router.get("/api/search", function(req, res) {
  console.log("search called");

  const term = req.query.query;
  console.log(term);
  Title.find(
    {
      TitleName: { $regex: term, $options: "i" }
    },
    "TitleName TitleId",
    { limit: 10 }
  ).then(searchResult => {
    console.log(searchResult);
    res.send(searchResult);
  });
});

module.exports = router;
