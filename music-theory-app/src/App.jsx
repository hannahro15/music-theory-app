import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Scales from './pages/scales/scales.jsx'

function App() {
  const basename = import.meta.env.PROD ? '/music-theory-app' : '/';

  return (
    
    <div className="App">
      <BrowserRouter basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/ear-training" element={<h1>Ear Training</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
