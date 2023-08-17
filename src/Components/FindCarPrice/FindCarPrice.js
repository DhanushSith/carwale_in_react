import React from 'react'
import './FindCarPrice.css'
import { useNavigate } from 'react-router-dom'

function FindCarPrice() {
  const navigate =useNavigate();
  return (
    <>
    <section className='container'>
        <h1>Find The Cars Of Your Choice</h1>
        <div className='findCarDiv'>
            <div className='btnFlex'>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${500000}`)}>Under 5 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${600000}`)}>Under 6 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${700000}`)}>Under 7 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${800000}`)}>Under 8 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${1000000}`)}>Under 10 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${1500000}`)}>Under 15 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${2000000}`)}>Under 20 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${2500000}`)}>Under 25 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${3000000}`)}>Under 30 Lakh</button>
                <button type='button' className='priceBtn' onClick={()=>navigate(`/CarModelPricePage/${40000000}`)}>All Cars</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default FindCarPrice