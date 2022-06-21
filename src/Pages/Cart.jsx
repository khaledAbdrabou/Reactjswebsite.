import React from 'react'
import Cart1 from '../Components/Cart1'
import Checkoutcomp from '../Components/Checkoutcomp'
import Contactbar from '../Components/Contactbar'
import Footercomp from '../Components/Footercomp'
import Navbar from '../Components/Navbar'
import RelatedItems from '../Components/RelatedItems'

const Cart = () => {
  return (
    <div>
        <Contactbar/>
        <Navbar/>
        <Cart1/>
        <Checkoutcomp/>
        <RelatedItems/>
        <Footercomp/>




    </div>
  )
}

export default Cart