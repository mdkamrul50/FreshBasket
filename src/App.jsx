import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'

import HeroBanner from './components/homepage/banner/HeroBanner'
import BestSellingProducts from './components/homepage/best-selling-products/bestSellingProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <BestSellingProducts></BestSellingProducts>

    </>
  );
}

export default App
