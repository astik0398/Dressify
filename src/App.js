import { Toaster } from 'react-hot-toast';
import './App.css';
import { Navbar } from "./Components/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";
import {Footer} from "./Components/Footer"
import styled from 'styled-components';

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <hr style={{backgroundColor:'black', height:'1px', border:'none'}}/>
      <MainRoutes />
      <Footer/>
      <Toaster/>
      </div>
  );
}

export default App;
