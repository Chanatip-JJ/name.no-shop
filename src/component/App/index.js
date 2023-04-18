import './index.css';
import Navbar from '../NavBar'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../ContactUs'
import Cart from '../Cart';
import Home from '../Home';
import Categories from '../Categories'
import { useState } from 'react';

function App() {
  let [cart,setCart] = useState([]);
  return (
   <>
     <Navbar cart={cart}/>
     <Routes>
      <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
      <Route path=':page' element={<Categories cart={cart} setCart={setCart}/>}/>
      <Route path='/Contact Us' element={<ContactUs/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
     </Routes>
   </>
  );
}

export default App;
