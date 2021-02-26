const router = require('express').Router();

// 데이터 모듈 호출
const dao = require('./dao');

// GET방식으로 접근 시 dao.list 모듈 실행
router.get("/", dao.list);

// GET방식으로 접근 번호가 있을 경우 dao.view 모듈 실행
router.get('/:num', dao.view); 

// POST방식으로 접근 시 dao.add 모듈 실행
router.post("/", dao.add);

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:`board unknown uri ${req.path}`});
})

module.exports = router;