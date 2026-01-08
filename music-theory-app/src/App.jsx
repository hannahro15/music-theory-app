import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Scales from './pages/scales/scales.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/ear-training" element={<h1>Ear Training</h1>} />
      </Routes>
    </div>
  )
}

export default App
