import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import SettingsLayout from './pages/layout';
import SettingsProfilePage from './components/settings/profile';
export default function App() {
  return (
  <Router>
        <Routes>
          <Route path="/" element= {<Home></Home>}></Route> 
          <Route path="/login" element= {<Login></Login>}></Route> 
          <Route path="/signup" element= {<Signup></Signup>}></Route> 
          <Route path="/dashboard" element= {<Dashboard></Dashboard>}></Route> 
          <Route path="/users" element= {<Users></Users>}></Route>
          <Route path='/settings' element= {SettingsLayout({children: <SettingsProfilePage/>}) } ></Route>
        </Routes>

  </Router>
  )
}
