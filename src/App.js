import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Resume from './components/resume';
import About from './components/about'
import Project from './components/projects';
import Navbar2 from './components/navbar3';
import Task from './components/ageCalcluator';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
     {/* <Task/> */}
     {/* <Navbar2/> */}
  
    
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/projects' element={<Project/>} />
      </Routes>
      
    </div>
  );
}

export default App;
