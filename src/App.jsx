import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'

import HeroBanner from './components/homepage/banner/HeroBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <h2>hello</h2>
    </>
  );
}

export default App
