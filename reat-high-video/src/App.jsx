import axios  from 'axios';
import { Routes, Route } from 'react-router'
import { Homepage } from './pages/home/Homepage' 
import { useState,useEffect } from 'react';
import {CheckoutPage } from './pages/checkout/CheckoutPage'
import {Orderspage} from './pages/orders/Orderspage'
import { TrackingPage } from './pages/trackingpage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
       const response= await axios.get('/api/cart-items?expand=product');
       setCart(response.data); 
    };
     fetchAppData();
  },[]);

  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} /> 
      <Route path="orders" element={<Orderspage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage />} />  
    </Routes>
  )
}

export default App
