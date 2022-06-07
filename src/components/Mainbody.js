import React from 'react'

const Mainbody = ({employee}) => {
    //const employee = props.employee;
    return (
        <section className="mainbody">
            <h2>Deatails of Employee</h2>
            <p>Name of Employee: {employee.name}</p>
            <p>Phone No: {employee.phone}</p>
            <p>Company: {employee.company}</p>
            <p>Address: {employee.address}</p>
        </section>
    )
}

export default Mainbody
