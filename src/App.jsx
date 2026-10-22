import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'

import HeroBanner from './components/homepage/banner/HeroBanner'
import CategoriesSection from './components/homepage/categories/CategoriesSection'
import BestSellingProducts from './components/homepage/best-selling-products/bestSellingProducts'
import FeaturesSection from './components/homepage/features/FeaturesSection'
import PromoSection from './components/homepage/promo/PromoSection'
import NewsletterSection from './components/homepage/newsletter/NewsletterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <CategoriesSection />
      <BestSellingProducts></BestSellingProducts>
      <PromoSection />
      <FeaturesSection />
      <NewsletterSection />
    </>
  );
}

export default App
