import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Resume from './components/resume';
import About from './components/about'
import Project from './components/projects';

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
    
    
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
