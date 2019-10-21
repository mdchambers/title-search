const express = require("express");
const router = express.Router();
const Title = require("./models/Titles");

//// AUTH ROUTES

router.get("/api/oneTitle", async function(req, res) {
  console.log("fetch called");
  const atitle = await Title.findOne();
  // console.log('fetched');
  res.send(atitle);
});

router.get("/api/search", async function(req, res) {
  console.log("search called");

  const term = req.query.query;
  console.log(term);
  Title.find(
    {
      TitleName: { $regex: term, $options: "i" }
    },
    "TitleName",
    { limit: 10 }
  ).then(searchResult => {
    console.log(searchResult);
    res.send(searchResult);
  });

  // const searchResults = await Title.find({ TitleName: "Cavalcade" });
});

module.exports = router;
