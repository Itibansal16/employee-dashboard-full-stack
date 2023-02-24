const db = require('../model/db.js')
const getAllEmployees = async (req, res) => {
   const query = "SELECT * FROM employee_db";
   db.query(query, (err, result) => {
    res.status(201).json(result)
   })
}

const createRecord = async (req, res) => {
    const query = `INSERT INTO employee_db VALUES("${req.body.name}", "${req.body.city}", "${req.body.department}", "${req.body.email}", ${req?.body.phone ? req.body.phone : null}, ${req.body.age ? req.body.age : null})`;
    db.query(query, (err, result) => {
        if(err) console.log(err);
        else{
            console.log("data added successfully")
            res.status(201).json(result);
        }
    })
}

const deleteRecord = async (req, res) => {
    const {id} = req.params;
    const query = `DELETE FROM employee_db WHERE eid = ${id}`;
    db.query(query, (err, result) => {
        console.log(err);
        res.status(201).json(result);
    })
}

const updateRecord = async (req, res) => {
    console.log("hey: " + req.body);
    const query = `UPDATE employee_db SET name = "Shruti" WHERE email = "${req.params.id}"`
    db.query(query, (err, result) => {
        console.log(err);
        res.status(201).json(result);
    })
}

const getEmployee = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const query = `SELECT * FROM employee_db WHERE email = "${id}"`;
    db.query(query, (err, result) => {
        console.log(result);
        if(err) console.log(err);
        res.status(201).json(result);
    })
}
module.exports = { getAllEmployees, createRecord, deleteRecord, updateRecord, getEmployee }