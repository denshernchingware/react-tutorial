import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { Routes , Route } from    'react-router'
import './Index.css'

import './general.css'


function App() {
  const [cart, setCart] = useState([]);

  
  // useEffect(() => {
  //    axios.get('/api/cart-items?expand=product')
  //       .then((response) => {
  //           setCart(response.data)
  //       })
  // },[])
 const getCartData = useCallback(async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data)
    }, []);

  useEffect(() => {
    getCartData();
  }, [getCartData])
  
 
  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} getCartData={getCartData} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} getCartData={getCartData} />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  
  )
}

export default App
