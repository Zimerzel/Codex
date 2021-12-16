const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'password',
    database: 'codex_db'
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => {

    const username = req.body.username;
    const review = req.body.review;

    const sqlInsert = "INSERT INTO comments (username, review) VALUES (?,?)"
    db.query(sqlInsert, (username, review), (err, result) => {

    });
});

app.listen(3001, () => {
    console.log('running on port 3001')
});

