import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Scales from './pages/scales/scales.jsx'
import Home from './pages/home/Home.jsx'
import Intervals from './pages/intervals/intervals.jsx'
import Arpeggios_7ths from './pages/arpeggios/Arpeggios_7ths.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/arpeggios" element={<Arpeggios_7ths />} />
        <Route path="/ear-training" element={<h1>Ear Training</h1>} />
        <Route path="/intervals" element={<Intervals />} />
      </Routes>
    </div>
  )
}
