var express = require('express');
var router = express.Router();
var Soccer = require('../models').Soccer

/* GET home page. */
router.get('/', function(req, res) {
  Soccer.all()
    .then(function(teams) {
      res.render('soccer', { teams: teams });
    })
});

/* POST add movie listing */
router.post('/', function(req, res) {
  var team = req.body.title;
  Soccer.create({ title: team })
    .then( function() {
      res.redirect('/soccer');
  });
});

router.delete('/:id', function(req, res) {
  Soccer.findById(req.params.id)
    .then( function(teams) {
      teams.destroy()
    })
    .then( function() {
      return res.redirect('/soccer');
  });
});

module.exports = router;
