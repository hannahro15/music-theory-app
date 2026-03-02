import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Scales from './pages/scales/Scales.jsx'
import Home from './pages/home/Home.jsx'
import Intervals from './pages/intervals/Intervals.jsx'
import Arpeggios7ths from './pages/arpeggios/Arpeggios7ths.jsx'
import MusicalGlossary from './pages/MusicalGlossary.jsx'
import Theory from './pages/theory/Theory.jsx'
import Activities from './pages/activities/Activities.jsx'
import Instrument from './pages/instrument/Instrument.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/instrument" element={<Instrument />} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/arpeggios" element={<Arpeggios7ths />} />
        <Route path="/ear-training" element={<h1>Ear Training</h1>} />
        <Route path="/intervals" element={<Intervals />} />
        <Route path="/musical-glossary" element={<MusicalGlossary />} />
      </Routes>
    </div>
  )
}
