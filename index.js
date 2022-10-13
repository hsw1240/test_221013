// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http');

var app = express();

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>CI/CD 테스트 두번째</h1>');
});
var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});