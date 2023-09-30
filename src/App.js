import logo from './logo.svg';
import './App.css';
import {Navbar}  from "./Components/Navbar";
import {Footer}  from "./Components/Footer";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer/>
      </div>
  );
}

export default App;
