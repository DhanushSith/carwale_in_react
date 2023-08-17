import React from "react";
import "./CarModelsSec.css";
import { Link, useParams } from "react-router-dom";
import Data from "../Data/Data.json";
import { FiChevronRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import AllBrandes from '../AllBrandesSecTwo/AllBrandSecTwo'


const CarModelsSec = () => {
    const { brandId } = useParams();
    const selectedBrand = Data.find((brand) => brand.id === parseInt(brandId));
    console.log(selectedBrand);

    if (!selectedBrand) { 
      return <div>Brand not found</div>;
    }

  return (
    <section className="container car_models">
      <h1>{selectedBrand.name}</h1>
      <div className="model-grid">
        <div>
        {selectedBrand.models?.map((model) => (
          <div key={model.id} className="car_div_full">
            <img src={model.src} alt={model.alt} className="car_div" />    
            <div className="car_content">
              <div className="car_content_head">
              <span>{model.alt}<FiChevronRight /></span>
                
                <div className="rating">
                  <AiFillStar className="star"/><span className="star">{`${model.rating} / 5 `}</span><span>Ratings</span>
                </div>
                </div>
              <div className="km">
                <p>{`${model.km} | ${model.bhp}`}</p>
              </div>
              <div className="km">
                <h4>{model.price}</h4>
                <p> - onwards</p>
              </div>
              <p>Avg. Ex-Showroom price</p>
              <Link className="getBestoffer">Get Best Offer</Link>
            </div>
          </div>
        ))}
        </div>
        <div className="logos_set">
          <AllBrandes/>
        </div>
      </div>
    </section>
  );
};

export default CarModelsSec;
