import axios  from 'axios';
import { Routes, Route } from 'react-router'
import { Homepage } from './pages/home/Homepage' 
import { useState,useEffect } from 'react';
import {CheckoutPage } from './pages/checkout/CheckoutPage'
import {Orderspage} from './pages/orders/Orderspage'
import { TrackingPage } from './pages/track/trackingpage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
      const loadCart = async () => {
       const response= await axios.get('/api/cart-items?expand=product');
       setCart(response.data); 
    };
  useEffect(() => {
    loadCart();
  },[]);

  return (
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} /> 
      <Route path="orders" element={<Orderspage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage />} />  
    </Routes>
  )
}

export default App
