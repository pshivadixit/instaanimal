import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'


export default function AppRoutes() {
return (
<Routes>
<Route path="/products" element={<Products />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
)
}