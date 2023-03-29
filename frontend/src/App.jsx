import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import Autismo from "./components/pages/Autismo";
import Idosos from "./components/pages/Idosos/Index.jsx";
import PCD from './components/pages/PCD/Index.jsx';
import TDAH from './components/pages/TDAH/Index.jsx';
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
