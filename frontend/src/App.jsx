import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import Autismo from "./components/pages/Autismo";
import Idosos from "./components/pages/Idosos/Index.jsx";
import PCD from './components/pages/PCD/Index.jsx';
import TDAH from './components/pages/TDAH/Index.jsx';
import Publicar from './components/pages/Publicar/index.jsx';
import PaginaNaoEncontrada from './components/pages/paginaNaoEncontrada/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/autismo' element={<Autismo/>} />
        <Route path='/idosos' element={<Idosos/>} />
        <Route path='/pcd' element={<PCD/> }/>
        <Route path='/tdah' element={<TDAH/> }/>
        <Route path='/publicar' element={<Publicar/> }/>
        <Route path='/*' element={<PaginaNaoEncontrada/> }/>

      </Routes>
    </Router>
  )
}

export default App
