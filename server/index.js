const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 3500;

const app = express()

// Initiate Database Connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"ehr_database",
})
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Database Connection Succesfull')
});

//Allows us to send json file as client
app.use(express.json())
//Initiate CORS to loosen API restrictions
app.use(cors())

app.post('/api/register_patient', (req, res) => {
    console.log(req.body);
    const patientName = req.body.patientName
    const email = req.body.patientEmail
    const password = req.body.password
    const nid = req.body.nid
    const phone = req.body.phone
    const address = req.body.address
    const gender = req.body.gender
    const bloodgroup = req.body.bloodgroup
    const date = req.body.date

    // const sqlInsert = "INSERT INTO user (patientName, email, password, nid, phone, address, gender, bloodgroup, date) VALUES (?)"
    // db.query(sqlInsert,[patientName, email, password, nid, phone, address, gender, bloodgroup, date], (err, result) =>{
    //     // console.log(result);
    // })
}); 

// app.get('api/patient_table', (req, res) => {
//     const sqlRetrieve = "SELECT * FROM user"
//     db.query (q, (err, data) => {
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// });





// Listen to server @PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));