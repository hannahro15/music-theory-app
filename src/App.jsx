import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Scales from './theory/scales/Scales.jsx'
import Home from './pages/home/Home.jsx'
import Intervals from './theory/intervals/Intervals.jsx'
import MusicalGlossary from './theory/MusicalGlossary.jsx'
import Quiz from './activities/quiz/Quiz.jsx'
import Arpeggios7ths from './theory/arpeggios/Arpeggios7ths.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theory/scales" element={<Scales />} />
        <Route path="/theory/arpeggios" element={<Arpeggios7ths />} />
        <Route path="/theory/circle-of-fifths" element={<h1>Circle of Fifths</h1>} />
        <Route path="/theory/key-signatures" element={<h1>Key Signatures</h1>} />
        <Route path="/theory/intervals" element={<Intervals />} />
        <Route path="/theory/musical-glossary" element={<MusicalGlossary />} />
        <Route path="/activities/ear-training" element={<h1>Ear Training</h1>} />
        <Route path="/activities/notation" element={<h1>Notation game</h1>} />
        <Route path="/activities/intervals" element={<h1>Intervals Quiz</h1>} />
        <Route path="/activities/chords" element={<h1>Chords Quiz</h1>} />
        <Route path="/activities/rhythm" element={<h1>Rhythm Game</h1>} />
        <Route path="/activities/scales" element={<h1>Scales Flashcards Game</h1>} />
        <Route path="/activities/classical-music-quiz" element={<Quiz />} />
        <Route path="/instrument/violin/fingerings" element={<h1>Violin Fingerings</h1>} />
        <Route path="/instrument/violin/technique" element={<h1>Violin Technique</h1>} />
        <Route path="/instrument/violin/excerpts" element={<h1>Violin Excerpts</h1>} />
      </Routes>
    </div>
  )
}
