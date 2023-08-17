import React from 'react'
import './ComparingSec.css'
import Accordion from '../Accordion/Accordion'
import Header from '../HeaderSec/Header'
import Footer from  '../FooterSec/FooterSec'

function ComparingSec() {
  
  return (
    <>
    <Header/>
    <div className='container accord'>
        <Accordion/>
    </div>
    <Footer/>
    </>
  )
}

export default ComparingSec

