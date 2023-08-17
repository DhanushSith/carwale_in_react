import React, { useState }  from 'react';
import './Banner.css';
import banner from '../Assets/banner-Img.jpg';
import {BsSearch} from "react-icons/bs";
import {AiOutlineDown} from "react-icons/ai";
import { useNavigate  } from "react-router-dom";

function Banner() {

  const [searchNames, setSearchNames] = useState("");
const navigate = useNavigate(); 
const handleSearch = () => {
  // Use navigate to change the route
  navigate(`/search/${searchNames}`);
};

  return (
    <>
    <section className='banner'>
      <div className='img_bnr'>
        <img src={banner} className='banner_img'/>
        <div className='img_bnr_cont'>
          <h1 className='bnr_heading'>FIND THE RIGHT CAR</h1>
          <div className='search_img'> 
            <div className='new'>
              <h4>New</h4>
              <AiOutlineDown className="new_icon"/>
            </div>
            <div className='search_img'>
              <BsSearch className="location-icon seachicon2" />
              <input type='search' placeholder='Type to select car name' className='selectCar'  value={searchNames}
                  onChange={(e) => setSearchNames(e.target.value)}
                  />
              <button type='button' className='search_btn' onClick={handleSearch} >Search</button>
            </div>
          </div>
          <div className='ban_fot_div'>
            <p className='ban_fot'>e.g. Maruti Suzuki Invicto</p>
            <p className='ban_fot'>New Car Discounts | Help Me Find A Car | Sell My Car</p>
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Banner