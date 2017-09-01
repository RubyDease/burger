var express = require('express');

var router = express.Router();

var burgers = require('../models/burger.js');



router.get('/', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = { burgers: data };

        console.log(hbsObject);

        res.render('index', hbsObject);
    });
});

router.post("/", function(req, res) {

    burger.create(['burger_name'], [req.body.burger_name], function() {
        res.redirect('/');

    });
});

router.put('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burger.update({ 'devoured': req.body.devoured }, condition, function(data) {
        res.redirect('/');
    });
});
router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function() {
        res.redirect("/");
    });
});
// Export routes for server.js to use.
module.exports = router;