import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Scales from './pages/scales/scales.jsx'
import Home from './pages/home/home.jsx'
import Intervals from './pages/intervals/Intervals.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/ear-training" element={<h1>Ear Training</h1>} />
        <Route path="/Intervals" element={<Intervals />} />
      </Routes>
    </div>
  )
}

export default App
