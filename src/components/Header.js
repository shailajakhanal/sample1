import React, {useState} from 'react'

const Header = (props) => {
    const {setEmployee} = props;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");

    const submitHandler = (e) => {
       e.preventDefault();
       const newEmp = {name, address, phone, company};
       setEmployee(newEmp);
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
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                />
                </div>
                <div className='control'>
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address"
                    value={address}
                    onChange={(e) =>setAddress(e.target.value)}
                />
                </div>
                <div className='control'>
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text" 
                    id="phone" 
                    name="phone"
                    value={phone}
                    onChange={(e) =>setPhone(e.target.value)}
                />
                </div>
                <div className='control'>
                <label htmlFor="company">Company</label>
                <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={company}
                    onChange={(e) =>setCompany(e.target.value)}
                />
                </div>
                <input type="submit" value="Submit"/>
                
            </form>
        </header>
    )
}

export default Header
