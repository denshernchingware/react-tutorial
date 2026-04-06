
import { HomePage } from './pages/HomePage'
import {CheckoutPage} from './pages/CheckoutPage'
import { Routes , Route } from    'react-router'
import './Index.css'

import './general.css'


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>
  
  )
}

export default App
