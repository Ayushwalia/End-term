import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";
import Login from "./components/Login";
import NoAccess from "./components/NoAccess";
import { GlobalContext } from "./Context";

function App() {
  const {users,admin}=GlobalContext();
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={users&&admin ? <Admin/>:<Navigate to='/noaccess'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/noaccess" element={<NoAccess/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
