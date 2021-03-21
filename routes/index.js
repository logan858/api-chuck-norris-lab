var express = require('express');
var router = express.Router();
let chuckCtrl = require("../controllers/chucknorris")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    jokes: null,
   });
});

router.get("/joke", chuckCtrl.show)

module.exports = router;
