import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/pages/home/index"
import Autismo from "../src/components/pages/Autismo/index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/autismo' element={<Autismo/>} />
      </Routes>
    </Router>
  )
}

export default App
