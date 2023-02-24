import React, {useState, useEffect} from 'react'
import "./Form.css"
import axios from "axios";
const Form = ( {setEmployees, editEmployee, setEditEmployee} ) => {
    const [employeeRecord, setEmployeeRecord] = useState({'name': '', 'city': '', 'department': '', 'email': '', 'phone': '', 'age': ''})
    // const [record, setRecord] = useState({editEmployee ? })
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(employeeRecord)
        if(editEmployee){
            const employees =  await axios.patch(
                `http://localhost:5000/api/edit/${editEmployee}`, employeeRecord
            );
            // console.log(employees);
            setEmployees(employees.config.data);
            clear();
        }
        else{
            const employees = await axios.post(
                "http://localhost:5000/api/create", employeeRecord
            );
            console.log(employees)
            setEmployees(employees.config.data);
            clear();
        }
    }
    const clear = () => {
        setEditEmployee("");
        setEmployeeRecord({'name': '', 'city': '', 'department': '', 'email': '', 'phone': '', 'age': ''})
    }

    useEffect(() => {
        const loadRecord = async () => {
            if(editEmployee){
                const { data } = await axios.get(`http://localhost:5000/api/get/${editEmployee}`);
                console.log(data);
                setEmployeeRecord(data[0]);
                console.log(employeeRecord)
            }
            else clear();
        }
        loadRecord();
    }, [editEmployee]);

  return (
      <div className = "form-g">
        <h2>Adding new Employee</h2>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "name">Name</label><br/>
            <input id = "name" name = "name" type = "text" value = {employeeRecord.name} onChange = {(e) => setEmployeeRecord({...employeeRecord, name : e.target.value})}/><br/>
            <label htmlFor = "city">City</label><br/>
            <input id = "city" name = "city" type = "text" value = {employeeRecord.city} onChange = {(e) => setEmployeeRecord({...employeeRecord, city : e.target.value})}/><br/>
            <label htmlFor = "department">Department</label><br/>
            <input id = "department" name = "department" type = "text" value = {employeeRecord.department} onChange = {(e) => setEmployeeRecord({...employeeRecord, department : e.target.value})}/><br/>
            <label htmlFor = "email">Email</label><br/>
            <input id = "email" name = "email" type = "email" value = {employeeRecord.email} onChange = {(e) => setEmployeeRecord({...employeeRecord, email : e.target.value})} /><br/>
            <label htmlFor = "phone">Phone</label><br/>
            <input id = "phone" name = "phone" type = "number" value = {employeeRecord.phone} onChange = {(e) => setEmployeeRecord({...employeeRecord, phone : e.target.value})}/><br/>
            <label htmlFor = "age">Age</label> <br/>
            <input id = "age" name = "age" type = "number"value = {employeeRecord.age} onChange = {(e) => setEmployeeRecord({...employeeRecord, age : e.target.value})}/><br/>
            <button type = "submit"> Submit </button>
        </form>
      </div>
  )
}

export default Form
