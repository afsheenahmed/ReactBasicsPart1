// import logo from './logo.svg';
import './App.css';
import RestApis from './components/APIComponent/RestApis';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
// import Cards from './components/Cards/Cards';
// import users from './jsonfiles/users.json';
// import { useState } from 'react';
function App() {

  return (
    <>
      {/* <Navbar></Navbar>
      <p>Welcome to the App!</p>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <h1>Hello, World!</h1>
        <div className="row">
{users.map((u, index) => (
  <Cards name={u.name} age={u.age} key={index}></Cards>
))}
        </div>

      </div> */}
      <Contact></Contact>
< RestApis name="John Doe" age={30}></RestApis>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
