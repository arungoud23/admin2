import './App.css';
import Sidemenu from './Components/Sidemenu';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import BreadCrumb from './Components/BreadCrumb';

function App() {
  return (
    <div className="App">
      <div>
        <Sidemenu />
      </div>
      <div>
        <Navbar />
        <BreadCrumb />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
