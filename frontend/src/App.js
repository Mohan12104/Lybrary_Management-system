import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/Signin';
import Admin from './components/Admin';
import FetchRegistrations from './components/FetchRegistrations';
//import Appointment from './components/Appointment';
import Home from './components/Home';
// import Contact from './components/Contact';
import Forgotpassword from './components/Forgotpassword';




// Placeholder components (replace them with your actual components)
const Homecomponent = () => <div>Home Component</div>;
//const VisitorComponent = () => <div>Visitor Component</div>;

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Signup' element={<Signup />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/Admin' element={<Admin />} exact />
          <Route path='/Home' element={<Home />} exact />
          <Route path='/FetchRegistrations' element={<FetchRegistrations />} exact />
          {/* <Route path='/appointment' element={<Appointment/>} exact />
          <Route path='/contact' element={<Contact/>} exact /> */} 
          <Route path='/Forgotpassword' element={<Forgotpassword/>} exact />

          
         
          


        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;