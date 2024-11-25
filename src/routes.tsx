import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurant'
import ScrollToTop from './scroll'

const Rotas = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/restaurantes" element={<Home />} />
        <Route path="/restaurantes/:endereco" element={<Restaurants />} />
      </Routes>
    </>
  )
}

export default Rotas
