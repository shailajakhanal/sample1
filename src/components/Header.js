import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const Header = (props) => {
    const {employees, setEmployees} = props;
    const [employee, setEmployee ] = useState({
        name:"",
        address: "",
        phone:"",
        company:""    });
    const handleChange =(e) =>{
        const {name, value} = e.target;
        setEmployee({...employee, [name]: value})
    }
    const submitHandler = (e) => {
       e.preventDefault();
       const tempEmployees = [...employees];
       employee.id = uuid();
       tempEmployees.push(employee);
       setEmployees(tempEmployees);
    //    const newEmp = {name, address, phone, company};
    //    setEmployees(newEmp);
    }
    return (
        <header className="header">
            <form onSubmit={submitHandler}>
                <div className='control'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />
                </div>
                <div className='control'>
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address"
                    value={employee.address}
                    onChange={handleChange}
                />
                </div>
                <div className='control'>
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text" 
                    id="phone" 
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                />
                </div>
                <div className='control'>
                <label htmlFor="company">Company</label>
                <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={employee.company}
                    onChange={handleChange}
                />
                </div>
                <input type="submit" value="Submit"/>
                
            </form>
        </header>
    )
}

export default Header
