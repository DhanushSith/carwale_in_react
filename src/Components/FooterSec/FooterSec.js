import React from 'react';
import './FooterSec.css';
import logo_one from '../Assets/download.png';
import logo_two from '../Assets/download (1).png';
import logo_three from '../Assets/download (2).png';
import logo_four from '../Assets/bike.png';
import logo_five from '../Assets/logo.svg';
import get_log from '../Assets/images.png';
import get_logo from '../Assets/download (3).png';
import {CiFacebook} from 'react-icons/ci';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {TiSocialYoutubeCircular ,TiSocialLinkedinCircular, TiSocialInstagram} from 'react-icons/ti'
import { Link } from 'react-router-dom';

function FooterSec() {
  return (
    <>
        <section className='footer'>
            <div className='logo_foot'>
                <img src={logo_five} alt='logo' className='logo_footer'/>
                <img src={logo_one} alt='logo' className='logo_footer'/>
                <img src={logo_two} alt='logo' className='logo_footer'/>
                <img src={logo_four} alt='logo' className='logo_footer'/>
                <img src={logo_three} alt='logo' className='logo_footer'/>
            </div>
            <hr className='hr'/>
            <div className='language '>
                <div className="flex-item-6">
                    <p className='language_inner'>Language: English हिंदी</p>
                    <div className='language_link'>
                       <a href='#' className='aboutus'>About Us</a>
                       <a href='#' className='aboutus'>Terms & Condition</a>
                    </div>
                    <div className='language_link'>
                        <a href='#' className='aboutus'>Careers</a>
                        <a href='#' className='aboutus'>Advertise</a>
                    </div>
                </div>
                <hr/>
                <div className='flex-item-6'>
                    <div className='downlode_logo'>
                        <img src={get_log} className='get_logo'/>
                        <img src={get_logo} className='get_logo'/>
                    </div>
                    <div className='social_div'>
                        <CiFacebook className='social'/>
                        <AiFillTwitterCircle className='social'/>
                        <TiSocialYoutubeCircular className='social'/>
                        <TiSocialLinkedinCircular className='social'/>
                        <TiSocialInstagram className='social'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FooterSec