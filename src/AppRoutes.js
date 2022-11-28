import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './components/Error/error'
import About from './pages/About'
import Logement from './pages/Logement'

function AppRoutes() {
  document.title = 'Kasa - Location de maison et appartements'
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </div>
  )
}

export default AppRoutes