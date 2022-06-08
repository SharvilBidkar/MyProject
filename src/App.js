import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/loginPage';
import EditEmployee from './pages/EditEmployee/EditEmployee';
import AddEmployee from './pages/AddEmployee/AddEmployee';
import Home from './pages/Home/Home';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import SecuredRoute from './pages/SecuredRoute/SecuredRoute';
import UnauthorisedPage from './pages/UnauthorisedPage/UnauthorisedPage';
import ApplyLeave from './pages/ApplyLeave/ApplyLeave';
import LeaveDetails from './pages/LeaveDetails/LeaveDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<SecuredRoute />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/edit" element={<EditEmployee />} />
          <Route exact path="/add" element={< AddEmployee />} />
          <Route exact path="/details" element={<EmployeeDetails />} />
          <Route exact path="/leave" element={<ApplyLeave />} />
          <Route exact path='/leavedetails' element={<LeaveDetails />} />
          <Route exact path="/leave" element={<ApplyLeave />} />
        </Route>

        <Route exact path='/unauth' element={<UnauthorisedPage />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
