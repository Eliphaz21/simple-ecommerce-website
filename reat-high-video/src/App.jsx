import axios  from 'axios';
import { Routes, Route } from 'react-router'
import { Homepage } from './pages/Homepage' 
import { useState,useEffect } from 'react';
import {CheckoutPage } from './pages/CheckoutPage'
import {Orderspage} from './pages/Orderspage'
import { TrackingPage } from './pages/trackingpage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      });
  },[]);

  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} /> 
      <Route path="orders" element={<Orderspage />} />
      <Route path="tracking" element={<TrackingPage />} />  
    </Routes>
  )
}

export default App
