import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/LoginScrren/Login';
import RegistrationScreen from './components/RegistrationScreen/registration.jsx';
import Employee_details from './components/Employee_details/Employee_details.jsx';
import Salary_Reports from './components/Reports/Salary_Reports.jsx';
import Dashboard from './components/dashboardScreen/dashboard.jsx';
import Navbar from './components/navigatio bar/navigationbar.jsx';
import Empdetailss from './components/navigatio bar/empdetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/registration" element={<Dashboard />} />
          {/* Add routes for other components as needed */}
        </Routes>
      </Router>
      {/*  <Router>
        <LoginScreen />
      </Router> */}

      {/* <RegistrationScreen /> */}
      {/*  <Empdetailss /> */}
      {/*  <Salary_Reports /> */}

    </div>
  );
}

export default App;
