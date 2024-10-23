import './App.css';
import React from 'react'

import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import View from './Components/View'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import Cart from './Components/Cart'
import New from './Components/New'
import Buynow from './Components/Buynow'

import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Components/Footer';
import Dashboard from './Components/Admin/Dashboard';
import AddProduct from './Components/Admin/AddProduct';
import EditProduct from './Components/Admin/EditProduct';
import ProductCard from './Components/ProductCard';
function App() {
    const locate = useLocation();
    const hideNavPath = ['/auth-login','/auth-signup']
  return (
    <div> 
        {!hideNavPath.includes(locate.pathname) && <Navbar></Navbar>}
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about-us' element={<About/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/new-items' element={<New/>}></Route>
          <Route path='/cart-items' element={<Cart/>}></Route>
          <Route path='/contact-us' element={<Contact/>}></Route>
          <Route path='/auth-login' element={<Login/>}></Route>
          <Route path='/auth-signup' element={<Signup/>}></Route>
          <Route path='/view-more' element={<View/>}></Route>
          <Route path='/product-card' element={<ProductCard/>}></Route>
          <Route path='/buy-now' element={<Buynow/>}></Route>
          <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
          <Route path='/admin/dashboard/add-product' element={<AddProduct/>}></Route>
          <Route path='/admin/dashboard/edit-product' element={<EditProduct/>}></Route>
        </Routes>
        {!hideNavPath.includes(locate.pathname) && <Footer></Footer>}

    </div>
  )
}

export default App
