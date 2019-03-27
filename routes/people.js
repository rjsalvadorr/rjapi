const express = require('express');
const router = express.Router();

const mocks = require('../utils/mocks');
const shuffle = require('lodash/shuffle');
const sample = require('lodash/sample');

/* GET people listing. */
router.get('/', function(req, res, next) {
  const baseUrl = req.protocol + '://' + req.get('host');

  const people = [];
  const numPeople = 10;
  let newRace;
  for(let i = 0; i < numPeople; i++) {
    newRace = mocks.getRandomFantasyRace();
    people.push({
      image: mocks.getRandomDisplayPicUrl(baseUrl),
      name: mocks.getRaceAppropriateName(newRace),
      race: newRace,
      gender: '???',
    });
  }
  res.json(people);
});

module.exports = router;
