const express = require("express");
require('dotenv').config();
const router = express.Router();
const { getAllEmployees, createRecord, deleteRecord, updateRecord, getEmployee } = require('../controllers/employees.js')

router.get("/get", getAllEmployees);
router.get("/get/:id", getEmployee);
router.post("/create", createRecord);
router.delete("/:id", deleteRecord);
router.patch("/edit/:id", updateRecord);
module.exports = router;