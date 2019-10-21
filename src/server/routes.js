const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const router = express.Router();
const Title = require("./models/Titles");

//// AUTH ROUTES

router.get("/api/title/onetitle", async function(req, res) {
  const atitle = await Title.findOne();
  res.send(atitle);
});

router.get("/api/title/:id", async function(req, res) {
  Title.findOne({
    TitleId: +req.params.id
  }).then(title => {
    res.send(title);
  });
});

router.get("/api/search", function(req, res) {
  const term = req.query.query;
  Title.find(
    {
      TitleName: { $regex: term, $options: "i" }
    },
    "TitleName TitleId",
    { limit: 10 }
  ).then(searchResult => {
    res.send(searchResult);
  });
});

module.exports = router;
