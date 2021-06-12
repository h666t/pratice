var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    // database: 'test'
});

connection.connect();
// CREATE TABLE IF NOT EXISTS user CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
connection.query('CREATE DATABASE  IF NOT EXISTS fang CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log('创建成功');
    // connection.query('desc ')
    // console.log('The solution is: ', results[0].solution);
});

connection.query("SHOW DATABASES;",(err,res)=>{
    if (err) throw err;
    console.log(res);
})

connection.query('use fang;',(err)=>{
    if (err) throw err;
})

connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
);`,(err,res)=>{
    if (err) throw err;
})

connection.query('SELECT * FROM user;',(err, res)=>{
    if (err) throw err;
    console.log(res);
})

connection.end()