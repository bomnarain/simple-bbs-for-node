const mysql = require('mysql');

// DB 접속 정보
const dbInfo = {
  host:'localhost'
  ,user:'dev'
  ,password:'dev1234'
  ,database:'study'
}

let dbcon = {
  init:function() {
    return mysql.createConnection(dbInfo);
  },
  conn:function(con) {
    con.connect(function(err){
      if(err) {
        console.log("mysql connection error :"+err);
        setTimeout(init, 2000);

      } else {
        console.log("mysql connection sucessfully");
      }
    })
  }
}

// 모듈 등록
module.exports = dbcon;

/*
  CREATE TABLE `tb_board` (
  `num` int(10) NOT NULL AUTO_INCREMENT,
  `board_code` varchar(20) DEFAULT NULL,
  `subject` varchar(300) DEFAULT NULL,
  `cont` text,
  `id` varchar(50) DEFAULT NULL,
  `filename` varchar(200) DEFAULT NULL,
  `ori_filename` varchar(200) DEFAULT NULL,
  `filesize` int(10) DEFAULT NULL,
  `regdate` datetime DEFAULT NULL,
  `editdate` datetime DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
*/