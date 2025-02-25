import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurant'
import ScrollToTop from './scroll'

const Rotas = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/restaurantes" replace />} />
        <Route path="/restaurantes" element={<Home />} />
        <Route path="/restaurantes/:pathRestaurant" element={<Restaurants />} />
      </Routes>
    </>
  )
}

export default Rotas
