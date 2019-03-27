const express = require('express');
const router = express.Router();

const mocks = require('../utils/mocks');
const shuffle = require('lodash/shuffle');

/* GET names listing. */
router.get('/', function(req, res, next) {
  res.send('pls specify "dwarf" or "elf" names (<root>/names/dwarf or <root>/names/elf)');
});

/* GET dwarf names listing */
router.get('/dwarf', function(req, res, next) {
  const dorfNames = mocks.getDwarfNames();
  res.json(dorfNames);
});

/* GET dwarf names listing */
router.get('/dwarf/:numNames', function(req, res, next) {
  let dorfNames = mocks.getDwarfNames();
  let numNames = parseInt(req.params.numNames, 10);

  // if numNames is a valid number,
  // and it's smaller than the dorfNames length,
  // trim result size to numNames
  if(numNames && numNames < dorfNames.length) {
    dorfNames = shuffle(dorfNames).slice(dorfNames.length - numNames);
  }

  res.json(dorfNames);
});

/* GET dwarf names listing */
router.get('/dwarf/:gender/:numNames', function(req, res, next) {
  let numNames = parseInt(req.params.numNames, 10);
  let dorfGender = req.params.gender.toLowerCase();
  let dorfNames = mocks.getDwarfNames(dorfGender);

  // if numNames is a valid number,
  // and it's smaller than the dorfNames length,
  // trim result size to numNames
  if(numNames && numNames < dorfNames.length) {
    dorfNames = shuffle(dorfNames).slice(dorfNames.length - numNames);
  }

  res.json(dorfNames);
});


/* GET names listing. */
router.get('/elf', function(req, res, next) {
  const elfNames = mocks.getElfNames();
  res.json(elfNames);
});

/* GET names listing. */
router.get('/elf/:numNames', function(req, res, next) {
  let elfNames = mocks.getElfNames();
  let numNames = parseInt(req.params.numNames, 10);
  
  // if numNames is a valid number,
  // and it's smaller than the elfNames length,
  // trim result size to numNames
  if(numNames && numNames < elfNames.length) {
    elfNames = shuffle(elfNames).slice(elfNames.length - numNames);
  }

  res.json(elfNames);
});

/* GET names listing. */
router.get('/elf/:gender/:numNames', function(req, res, next) {
  let numNames = parseInt(req.params.numNames, 10);
  let elfGender = req.params.gender.toLowerCase();
  let elfNames = mocks.getElfNames(elfGender);
  
  // if numNames is a valid number,
  // and it's smaller than the elfNames length,
  // trim result size to numNames
  if(numNames && numNames < elfNames.length) {
    elfNames = shuffle(elfNames).slice(elfNames.length - numNames);
  }

  res.json(elfNames);
});

module.exports = router;
