import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import ScrollToTop from './scroll'

const Rotas = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:restaurantName" element={<Restaurants />} />
    </Routes>
  </>
)

export default Rotas
