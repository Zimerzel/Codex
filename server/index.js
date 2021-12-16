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
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM comments";
    db.query(sqlSelect, (err, result) => {
        console.log(err);
        //send to front end:
        //res.send(result);
    });
})

app.post('/api/insert', (req, res) => {

    const username = req.body.username;
    const review = req.body.review;

    const sqlInsert = "INSERT INTO comments (username, review) VALUES ('webber', 'greatest')"
    db.query(sqlInsert, (username, review), (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001')
});

