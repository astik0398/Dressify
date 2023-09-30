import { Toaster } from 'react-hot-toast';
import './App.css';
import { Navbar } from "./Components/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Toaster/>
      </div>
  );
}

export default App;
