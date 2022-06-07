import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "./components/Header";
import { Footer } from "./components/Footer";
import Mainbody from "./components/Mainbody";

function App() {
  const [employee, setEmployee] = useState({
    name: "Shailaja Khanal",
    address: "Tartan Vista Drive, Alexandria",
    phone: "3012328979",
    company: "Sage Computing Inc."
  });
  //here useState is react hook and employee is state value, and setEmployee is method to
  //change the value, these are destructured from useState;
   //let admin_name = "Shailaja Khanal";
  return (
    <div className="App">
      <div className="container">
        <main>
          <Head setEmployee={setEmployee}/>
          <Mainbody employee={employee} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
