import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "./components/Header";
import { Footer } from "./components/Footer";
import Mainbody from "./components/Mainbody";

function App() {
  let admin_name = "Shailaja Khanal";
  return (
    <div className="App">
      <div className="container">
        <Head admin={admin_name}/>
        <Mainbody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
