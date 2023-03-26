import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/pages/home/index";
import Autismo from "./components/pages/Autismo/Index";
import Idosos from "../src/components/pages/Idosos/Index";
import PCD from './components/pages/PCD/Index';
import TDAH from './components/pages/TDAH/Index';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/autismo' element={<Autismo/>} />
        <Route path='/idosos' element={<Idosos/>} />
        <Route path='/pcd' element={<PCD/> }/>
        <Route path='/tdah' element={<TDAH/> }/>
        
        
      </Routes>
    </Router>
  )
}

export default App
