var express = require('express');
var router = express.Router();

// api router 호출
const api = require("./api");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("path="+req.path);
  next();  
});

//api router 적용
router.use("/api",api);

router.all('/',(req,res)=>{
  res.send("{message:welcome}");
})

module.exports = router;
