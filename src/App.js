import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMember from './member/AddMember';
import EditMember from './member/EditMember';
import ViewMember from './member/ViewMember';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addmember" element={<AddMember/>}/>
        <Route exact path="/editmember/:id" element={<EditMember/>}/>
        <Route exact path="/viewmember/:id" element={<ViewMember/>}/>
      </Routes>

      </Router>
    
    </div>
  );
}

export default App;
