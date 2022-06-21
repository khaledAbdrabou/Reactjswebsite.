import React from 'react'
import Contactbar from '../Components/Contactbar'
import Navbar from '../Components/Navbar'
import RelatedItems from '../Components/RelatedItems'
import Shopbanner1 from '../Components/Shopbanner1'
import SpecificItems from '../Components/SpecificItems'
import Testimonials from '../Components/Testimonials'
import Footercomp from '../Components/Footercomp'


const Detail = () => {
  return (
    <div>
        <Contactbar/>
        <Navbar/>
        <Shopbanner1/>
        <SpecificItems/>
        <Testimonials/>
        <RelatedItems/>
        <Footercomp/>
      
    </div>
  )
}

export default Detail
