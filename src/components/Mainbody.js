import React from 'react'

const Mainbody = ({employees, setEmployees}) => {
    //const employee = props.employee;

    const deleteHandler = (id) => {
        const tempEmployees = employees.filter(emp =>emp.id !== id);
        setEmployees(tempEmployees);
    };
    const updateHandler =(id) =>{
        alert("Update button clicked of id"+id);
    };
    return (
        <section className="mainbody">
            {/* <h2>Deatails of Employee</h2>
            <p>Name of Employee: {employee.name}</p>
            <p>Phone No: {employee.phone}</p>
            <p>Company: {employee.company}</p>
            <p>Address: {employee.address}</p> */}
            <table>
                <tr>
                    <th>Name of Employee</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
               {employees.map(emp =>(
                   <tr key={emp.id}>
                       <td>{emp.name}</td>
                       <td>{emp.phone}</td>
                       <td>{emp.company}</td>
                       <td>{emp.address}</td>
                       <td><button onClick={() =>updateHandler(emp.id)}>Update</button></td>
                       <td><button onClick={() =>deleteHandler(emp.id)}>Delete</button></td>
                   </tr>
               ))}
            </table>
        </section>
    )
}

export default Mainbody
