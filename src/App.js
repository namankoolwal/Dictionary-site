import './App.css';
import { Route,Routes } from 'react-router-dom';

import Dictionary from "./component/Dictionary";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';


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

{/* <GoogleOAuthProvider clientId="78940162672-otnijmqjlr47tj63g4sske1ef13dovqi.apps.googleusercontent.com">

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider> */}
     <Footer/>
    </>
  );
}

export default App;
