import React , { useState, createContext} from "react";
import { Routes, Route } from 'react-router-dom';
import header from "./Images/header.jpeg";

import './App.css';
import Navbar from "./Components/Navbar"
import Apply from "./Components/Apply"
import Footer from "./Components/Footer";
import Home from "./Components/Home"
import Contact from './Components/Contact';
import Eligibility from './Components/Eligibility';
import About from "./Components/About";
import Udid from "./Components/Udid";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Govtdashboard from "./Components/Admin/Govtdashboard";
import Govtlogin from "./Components/Admin/Govtlogin";
import Applications from "./Components/Admin/Applications";
import Agencydashboard from "./Components/Agency/Agencydashboard";
import Agencylogin from "./Components/Agency/Agencylogin";
import Agencyapplications from "./Components/Agency/Agencyapplications";
import Agencyapplyform from "./Components/Agency/Agencyapplyform";

const CredentialsContext = createContext();

const App = () => {
  const credentials = useState(null);

  return (
    <>
    <CredentialsContext.Provider value={credentials}>
    <img src={header} alt="header" />

  <Navbar />

  <Routes>
      {/* <Route path='*' element={<Errorpage/>} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About/>} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/govtlogin" element={<Govtlogin />} />
      <Route path="/agencylogin" element={<Agencylogin />} />
      <Route path="/signup" element={<Signup/>} /> 
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/eligibility" element={<Eligibility />} />
      <Route exact path="/udid" element={<Udid />} />
      <Route exact path="/apply" element={<Apply/>} />
      <Route exact path="/agencyapplyform" element={<Agencyapplyform/>} />
      <Route exact path="/applications" element={<Applications/>} />
      <Route exact path="/agencyapplications" element={<Agencyapplications/>} /> 
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/govtdashboard" element={<Govtdashboard/>} /> 
      <Route exact path="/agencydashboard" element={<Agencydashboard/>} /> 
      
      </Routes>
 
  <Footer />
  </CredentialsContext.Provider>
  </>
  );
}

export default App;
export {CredentialsContext};
