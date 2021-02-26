const router = require('express').Router();
// board router 호출
const board = require('./board');

router.all('*',(req, res, next)=>{
	console.log("path="+req.path);
	next();
})

// board router 적용
router.use("/board",board); 

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;