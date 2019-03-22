var express = require('express');
var router = express.Router();

var mocks = require('../utils/mocks');
var shuffle = require('lodash/shuffle');
var shuffle = require('lodash/shuffle');

/* GET names listing. */
router.get('/', function(req, res, next) {
  res.send('pls specify "dwarf" or "elf" names (<root>/names/dwarf or <root>/names/elf)');
});

/* GET dwarf names listing */
router.get('/dwarf/:numNames', function(req, res, next) {
  let dorfNames = mocks.getDwarfNames();
  let numNames = parseInt(req.params.numNames, 10);
  console.log(req.params);
  console.log(numNames);


  // if numNames is a valid number,
  // and it's smaller than the dorfNames length,
  // trim result size to numNames
  if(numNames && numNames < dorfNames.length) {
    console.log("Dorf names before: " + JSON.stringify(dorfNames));
    dorfNames = dorfNames.slice(numNames - 1);
    console.log("Dorf names after: " + JSON.stringify(dorfNames));
  }

  res.json(dorfNames);
});

/* GET names listing. */
router.get('/elf/:numNames', function(req, res, next) {
  const elfNames = mocks.getElfNames();
  res.json(elfNames);
});

module.exports = router;
