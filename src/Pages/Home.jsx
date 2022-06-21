import React from 'react'
import Bestseller from '../Components/Bestseller'
import Categorylist from '../Components/Categorylist'
import Contactbar from '../Components/Contactbar'
import Footercomp from '../Components/Footercomp'
import Navbar from '../Components/Navbar'
import Newarrivals from '../Components/Newarrivals'
import Salebanner from '../Components/Salebanner'
import Slider from '../Components/Slider'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <Contactbar/>
      <Navbar/>
      <Slider/>
      <Categorylist/>
      <Newarrivals/>
      <Salebanner/>
      <Bestseller/>
      <Testimonials/>
      <Footercomp/>
    </div>
  )
}

export default Home
