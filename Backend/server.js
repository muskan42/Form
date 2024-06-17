import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(json());

const db = createConnection({
    host: 'localhost',
    user: "root",
    phone: '',
    database: 'data'
})

app.post('/data', (req, res) => {
    const sql = "INSERT INTO login (`form`, `name`, `countrycode`, `phone`) Values(?)";
    const values = [
        req.body.form,
        req.body.name,
        req.body.countrycode,
        req.body.phone,
    ]
})

db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
})

app.listen(8081, () => {
    console.log("Listening...")
})