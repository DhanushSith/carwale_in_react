import React from 'react'
import './Bannertwo.css'
import img from '../Assets/get-final-price-banner.jpg'

function Bannertwo() {
  return (
    <>
    <section className='bannertwo'>
        
        <div className='container'>
          <div className='img_bnr'>
        <img src={img} alt='bannerTwo' className='banner_img'/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Bannertwo