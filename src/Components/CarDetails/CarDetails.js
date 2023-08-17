import React from 'react';
import './CarDetails.css';
import { useParams } from 'react-router-dom';
import {AiOutlineRight} from 'react-icons/ai'
import Slider from '../Slider/Slider';
import Data from "../Data/Data.json";

function CarDetails() {
  const { featuredcarId } = useParams();
  const selectedBrand = Data.find((brand) => brand.id === parseInt(featuredcarId));
  console.log(selectedBrand);

  if (!selectedBrand) {
    return <div>Brand not found</div>;
  }
  return (
    <section className="cardtails">
      <div className="container_alt">
        <h1>{selectedBrand.details.carname}</h1>
        <p className='paraferap_detail'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <div className="nav_bar_dtails">
          <a href="##" className="nav_bar_link">
            OVERVIEW
          </a>
          <a href="##" className="nav_bar_link">
            OFFERS
          </a>
          <a href="##" className="nav_bar_link">
            KEY SPECS
          </a>
          <a href="##" className="nav_bar_link">
            VERSIONS
          </a>
          <a href="##" className="nav_bar_link">
            EXPERT OPINIION
          </a>
          <a href="##" className="nav_bar_link">
            SIMILER CARS
          </a>
          <a href="##" className="nav_bar_link">
            COLOURS
          </a>
          <a href="##" className="nav_bar_link">
            BROCHURE
          </a>
          <a href="##" className="nav_bar_link">
            MILEAGE
          </a>
          <a href="##" className="nav_bar_link">
            MORE
          </a>
        </div>
        <hr />

        <div className="img_car_div flex-container">
          <div className="img_flx_div flex-item-6">
            <div className='scrolespy'>
            <Slider id={selectedBrand.details.relatedImages}/>
            </div>
            <div className='col_img_vid'>
                <h5>Colours</h5>
                <h5>Images</h5>
                <h5>Videos</h5>
            </div>
          </div>

          <div className='img_flx_div_rit flex-item-6'>
            <div className='right_head'>
                <div className='ver_city'>
                    <div className='versiondiv flex-item-6'>
                        <p>Version</p>
                        <h5>{selectedBrand.details.version}</h5>
                    </div>
                    <AiOutlineRight/>
                </div>
                <div className='ver_city'>
                    <div  className='versiondiv flex-item-6'>
                        <p>City</p>
                        <h5>{selectedBrand.details.city}</h5>
                    </div>
                    <AiOutlineRight/>
                </div>
            </div>
            <div className="price">
                <h3 className='priceforcar'>{selectedBrand.details.pricing}</h3>
                <p className='avecar'>Avg. Ex-Showroom price</p>
                <i>Available only in Nexa showroom</i>
                <div className='emi_sec'>
                    <div>
                        <p>Calculate your EMI</p>
                        <p>EMI Calculator</p>
                    </div>
                    <button type='button'>Get EMI Offers</button>
                </div>
            </div>
            <button type='button' className='getoffer'>Get July Offers</button>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
    
  );
}


export default CarDetails;
