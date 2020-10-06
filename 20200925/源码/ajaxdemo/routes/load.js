var express = require('express');
var router = express.Router();

// 获取html代码片段
router.post('/html', function(req, res) {

    console.log(req.body)

    var html = '<p>我是从服务器中加载过来的元素，你向服务提交的数据为：' + req.body.name + '</p>'

    res.status(200).send(html);
});

// 获取JavaScript代码片段
router.get('/javascript', function(req, res) {

    // 要返回给浏览器的 JavaScript 代码片段
    var script = '$(".box").css({height: "100px", backgroundColor: "red"})';

    // 将代码返回给浏览器
    res.status(200).send(script);

});

module.exports = router;