import React, {useState, useEffect} from 'react'
// import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar'

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [editEmployee, setEditEmployee] = useState("");
    const loadRecords = async () => {
        const employees = await axios.get(
            "http://localhost:5000/api/get"
        );
        // console.log(employees.data)
        setEmployees(employees.data);
    }
    const handleEdit = async (email) => {
        // console.log(typeof(email));
        // setEditEmployee(email);
        // console.log(editEmployee);
        // const employees = await axios.patch(`http://localhost:5000/api/edit/${email}`)
        setEditEmployee(email);
        console.log(editEmployee)
    }
    useEffect(() => {
      loadRecords();
    }, [employees]);
    // const handleClick = async () => {
    //   const res = await axios.post("http://localhost:5000/api/create", {"eid": 11, "email":"itibansal@gmail.com","phone":"987"})
    //   console.log(res);
    //   setEmployees(employees, res.config.data)
    // }
    // const handleDel = async (eid) => {
    //   await axios.delete(`http://localhost:5000/api/${eid}`)
    // }
    return (
    <div>
      <Navbar />
      <div className = "main-bar">
        <div className = "employees-list">
          {
            employees.map((employee, index) => {
              return(
                <div key = {index + 1} className = "record">
                  <p> Name: {employee.name} </p>
                  <p> Email: {employee.email} </p>
                  <p> Department: {employee.department}</p>
                    <p>City: {employee.city}</p><br />
                    <button onClick = {() => handleEdit(employee.email)}>Edit</button><br/>
                    <button>Delete</button>
                </div>
              )
            })
          }
        </div>
        <div className = "form">
          <Form setEmployees = {setEmployees} editEmployee = {editEmployee} setEditEmployee = {setEditEmployee}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
