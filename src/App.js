import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dictionary from "./component/Dictionary";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Dictionary/>} />
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Signup/>}/>
    </Routes>
     <Footer/>
    </>
  );
}

export default App;
