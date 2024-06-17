const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    phone: '',
    database: 'signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `countrycode`, `phone`) Values(?)";
    const values = [
        req.body.name,
        req.body.countrycode,
        re.body.phone,
    ]
})

db.query(sql, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
})

app.listen(8081, ()=> {
    console.log("Listening...")
})