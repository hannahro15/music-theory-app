import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Scales from './theory/scales/scales.jsx'
import Home from './pages/home/Home.jsx'
import Intervals from './theory/intervals/Intervals.jsx'
import Arpeggios7ths from './theory/arpeggios/Arpeggios7ths.jsx'
import MusicalGlossary from './theory/MusicalGlossary.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theory/scales" element={<Scales />} />
        <Route path="/theory/arpeggios" element={<Arpeggios7ths />} />
        <Route path="/theory/intervals" element={<Intervals />} />
        <Route path="/theory/musical-glossary" element={<MusicalGlossary />} />
        <Route path="/activities/ear-training" element={<h1>Ear Training</h1>} />
      </Routes>
    </div>
  )
}
