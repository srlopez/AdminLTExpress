var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/index.html');
});

router.get('/:page.html', function(req, res) {
    res.render(req.param('page'));
});


router.get('/:dir/:page.html', function(req, res) {
    res.render(req.param('dir')+'/'+req.param('page'));//.replace(".html", ""));
});

module.exports = router;
