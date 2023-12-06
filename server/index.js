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
    const name = req.body.patientName
    const email = req.body.patientEmail
    const password = req.body.password
    const nid = req.body.nid
    const phone = req.body.phone
    const address = req.body.address
    const gender = req.body.gender
    const bloodgroup = req.body.bloodgroup
    const dob = req.body.date

    const sqlInsert = "INSERT INTO user (name, email, password, nid, phone, address, gender, bloodgroup, dob) VALUES (?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [name, email, password, nid, phone, address, gender, bloodgroup, dob], (err, result) =>{
        console.log(err);
    })
    db.commit();
}); 
app.get('/api/patient_table', (req, res) => {
    const sqlRetrieve = "SELECT * FROM user"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/patient/:id`, (req, res) => {
    const patient_id = req.params.id

    const sqlRetrieve = "SELECT * FROM user WHERE patient_id= ?"
    db.query (sqlRetrieve, [patient_id], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/patient/medical_report/:id`, (req, res) => {
    const patient_id = req.params.id

    const sqlRetrieve = "SELECT medical_report.report_id, user.name AS patient_name, doctor.name AS doctor_name, medical_report.diagnosis, medical_report.visit_date FROM medical_report INNER JOIN user ON medical_report.patient_id = user.patient_id INNER JOIN doctor ON medical_report.doctor_id = doctor.doctor_id WHERE medical_report.patient_id = ?"
    db.query (sqlRetrieve, [patient_id], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/patient/allergy/:id`, (req, res) => {
    const patient_id = req.params.id

    const sqlRetrieve = "SELECT allergy.allergy_id, allergy.name AS allergy_name, user.patient_id AS patient_id, user.name AS patient_name FROM patient_allergy INNER JOIN allergy ON patient_allergy.allergy_id = allergy.allergy_id INNER JOIN user ON patient_allergy.patient_id=user.patient_id WHERE patient_allergy.patient_id = ?;"
    db.query (sqlRetrieve, [patient_id], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});


app.get('/api/report_table', (req, res) => {
    const sqlRetrieve = "SELECT medical_report.report_id,user.name AS patient_name,doctor.name AS doctor_name,medical_report.diagnosis,medical_report.visit_date FROM medical_report INNER JOIN user ON medical_report.patient_id = user.patient_id INNER JOIN doctor ON medical_report.doctor_id = doctor.doctor_id;"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

// STATISTICS API
app.get(`/api/grid_data`, (req, res) => {
    const sqlRetrieve = "SELECT 'Patient' AS role, COUNT(*) AS total FROM user UNION ALL SELECT 'Doctor' AS role, COUNT(*) AS total FROM doctor UNION SELECT 'Hospital' AS role, COUNT(*) AS total_count FROM clinic UNION SELECT 'Report' AS role, COUNT(*) AS total_count FROM medical_report"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/virus_data`, (req, res) => {
    const sqlRetrieve = "SELECT diagnosis AS name, COUNT(*) AS value FROM medical_report WHERE diagnosis IN ('covid-19', 'dengue', 'influenza') GROUP BY diagnosis"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/gender_data`, (req, res) => {
    const sqlRetrieve = "SELECT gender AS name, COUNT(*) AS value FROM user GROUP BY gender"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/allergy_data`, (req, res) => {
    const sqlRetrieve = "SELECT allergy.name AS name, COUNT(*) AS value FROM patient_allergy INNER JOIN allergy ON patient_allergy.allergy_id = allergy.allergy_id GROUP BY patient_allergy.allergy_id"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.get(`/api/allergy_table`, (req, res) => {
    const sqlRetrieve = "SELECT * FROM allergy"
    db.query (sqlRetrieve, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});





// Listen to server @PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));