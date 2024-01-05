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


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/admin" element={<AdminDashboard/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/addmember" element={<AddMember/>}/>
        <Route exact path="/editmember/:id" element={<EditMember/>}/>
        <Route exact path="/viewmember/:id" element={<ViewMember/>}/>
        <Route exact path="/register" element={<AddMemberTemp/>}/>
        <Route exact path="/pending" element={<MemberTemp/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        <Route exact path="/programs" element={<Programs/>}/>
       
      </Routes>

      </Router>
    
    </div>
  );
}

export default App;
