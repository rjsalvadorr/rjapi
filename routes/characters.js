const express = require('express');
const router = express.Router();

const mocks = require('../utils/mocks');
const shuffle = require('lodash/shuffle');
const sample = require('lodash/sample');

/* GET characters listing. */
router.get('/', function(req, res, next) {
  const baseUrl = req.protocol + '://' + req.get('host');
  const characters = [];
  const numcharacters = 20;
  let newRace;
  let newGender;

  for(let i = 0; i < numcharacters; i++) {
    newRace = mocks.getRandomFantasyRace();
    newGender = mocks.getRandomFantasyGender();
    characters.push({
      name: mocks.getRaceAppropriateName(newRace, newGender),
      race: newRace,
      gender: newGender,
      image: mocks.getRandomDisplayPicUrl(baseUrl),
    });
  }
  res.json(characters);
});

module.exports = router;
