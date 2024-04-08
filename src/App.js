import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditMember from './member/EditMember';
import ViewMember from './member/ViewMember';
import Main from './pages/Main';
import AddMemberTemp from './memberTemp/AddMemberTemp';
import AdminDashboard from './pages/AdminDashboard';
import MemberTemp from './memberTemp/MemberTemp';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import AddMember from './member/AddMember';
import OfficersDirectory from './pages/OfficersDirectory';
import Report from './member/Report';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Main/>
      <AboutUs/>
      <Programs/>
      <OfficersDirectory/>

      <Routes>    
        <Route exact path ="/admin" element={<AdminDashboard/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/addmember" element={<AddMember/>}/>
        <Route exact path="/editmember/:id" element={<EditMember/>}/>
        <Route exact path="/editmembertemp/:id_temp" element={<EditMember/>}/>
        <Route exact path="/viewmember/:id" element={<ViewMember/>}/>
        <Route exact path="/register" element={<AddMemberTemp/>}/>
        <Route exact path="/pending" element={<MemberTemp/>}/>
        <Route exact path="/newadmin" element={<Report/>}/>
        <Route exact path="/login" element={<Login/>}/>
       
      </Routes>

      </Router>
    
    </div>
  );
}

export default App;
