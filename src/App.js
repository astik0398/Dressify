import { Toaster } from 'react-hot-toast';
import './App.css';
import { Navbar } from "./Components/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";
import {Footer} from "./Components/Footer"

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer/>
      <Toaster/>
      </div>
  );
}

export default App;
