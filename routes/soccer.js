var express = require('express');
var router = express.Router();
var Soccer = require('../models').Soccer

/* GET home page. */
router.get('/', function(req, res) {
  Soccer.all()
    .then(function(team) {
      res.render('soccer', { teams: team });
    })
});

router.post('/', function(req, res) {
  var team = req.body.title;
  Soccer.create({ teams: team })
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

router.get('/:id/edit', function(req, res) {
  Soccer.findById(req.params.id)
    .then( function(teams) {
      return res.render('edit', { teams: teams });
  });
});

router.put('/:id', function(req, res) {
  Soccer.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/soccer');
  })
});

module.exports = router;
