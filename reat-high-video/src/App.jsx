import { Routes, Route } from 'react-router'
import { Homepage } from './pages/Homepage' 
import {CheckoutPage } from './pages/CheckoutPage'
import {Orderspage} from './pages/Orderspage'
import { TrackingPage } from './pages/trackingpage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<CheckoutPage />} /> 
      <Route path="orders" element={<Orderspage />} />
      <Route path="tracking" element={<TrackingPage />} />  
    </Routes>
  )
}

export default App
