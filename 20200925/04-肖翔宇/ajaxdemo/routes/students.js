var express = require('express');
var router = express.Router();
var fs = require('fs');
// 查询学生
router.get('/getStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {
        // 如果发生错误，打印错误信息并退出函数
        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        // 将要返回的结果
        var results = [];

        // 指定的id
        var myid = req.query.id;

        // 指定的name
        var myname = req.query.name;

        console.log(myid)
        console.log(myname)

        // 获取指定id的学生信息
        if (myid) {

            data.forEach(function(item, index) {
                if (item.id == myid) {
                    results.push(item);
                }
            });

        } else if (myname) {
            // 获取指定name的学生信息
            data.forEach(function(item, index) {
                if (item.name.includes(myname)) {
                    results.push(item);
                }
            });

        } else {
            // 获取所有学生
            results = data;
        }

        res.status(200).send(results);

    });
});


// 创建学生
router.post('/addStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {
        // 试着将数据解析成数组
        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        // 将时间戳作为学生ID
        req.body.id = Date.now();

        // 将题型信息添加到数组中
        data.push(req.body);

        console.log(data);
        // 将数据写回到文件中
        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {
            if (err) {
                res.status(500).end();
                return console.log(err);
            }
            res.status(200).send(data);
            // form表单提交的形式
            // res.redirect('http://localhost:8080/index.html');
        });
    });
});

// 删除学生
router.get('/removeStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {

        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        var index = -1;

        var myid = req.query.id;

        data.forEach(function(item, i) {
            if (item.id == myid) {
                index = i;
            }
        });

        if (index >= 0) {
            data.splice(index, 1);
        }

        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {

            if (err) {
                res.status(500).end();
                return console.log(err);
            }

            res.status(200).send(data);
        });
    });
});

// 修改学生
router.post('/updateStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {

        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        data.forEach(function(item, index) {
            if (item.id == req.body.id) {
                data[index] = req.body;
            }
        });

        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {

            if (err) {
                res.status(500).end();
                return console.log(err);
            }

            res.status(200).send(data);
        });
    });
});


router.get('/jsonpdemo', function(req, res) {


    console.log('前台传递过来的方法名为：' + req.query.callback);


    var data = '[{"name": "张三"},{"name": "李四"},{"name": "王美丽"}]';

    console.log('接收到请求');

    res.status(200).send(req.query.callback + '(' + data + ')');

});
// module.exports 提供了暴露接口的方法
module.exports = router;