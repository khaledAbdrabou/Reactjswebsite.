import React from 'react'
import CategoryProduct from '../Components/CategoryProduct'
import Contactbar from '../Components/Contactbar'
import Navbar from '../Components/Navbar'
import Shopbanner from '../Components/Shopbanner'
import Salebanner from '../Components/Salebanner'
import Recommendedforyou from '../Components/Recommendedforyou'
import Footercomp from '../Components/Footercomp'

const Shopfull = () => {
  return (
    <div>
        <Contactbar/>
        <Navbar/>
        <Shopbanner/>
        <CategoryProduct/>
        <Salebanner/>
        <Recommendedforyou/>
        <Footercomp/>

    </div>
    

  )
}

export default Shopfull