import React from "react";
import "./CarModelsPrice.css";
import { Link, useParams } from "react-router-dom";
import Data from "../Data/Data.json";
import { FiChevronRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import AllBrandes from "../AllBrandesSecTwo/AllBrandSecTwo";

const CarModelsPrice = () => {
  const { price } = useParams();
  console.log(price);
  console.log(Data);
  const selectedBrand = Data.map((brand) => {
    return brand.models.map((items) => items);
  });
  console.log(selectedBrand);

  let filll = selectedBrand.flatMap((items) => {
    return items.filter((e) => e.filterAmout <= price);
  });
  console.log(filll);

  if (!filll) {
    return <div>Brand not found</div>;
  }

  return (
    <section className="container car_models_two">
      <h1>{selectedBrand.name}</h1>
      <div className="model-grid">
        <div className="car_two_col">
          {filll.map((model) => {
            return (
              <div key={model.id} className="car_div_full_two">
                <img src={model.src} alt={model.alt} className="car_div_two" />
                <div className="car_content">
                  <div className="car_content_head">
                    <span>
                      {model.alt}
                      <FiChevronRight />
                    </span>

                    {/* <div className="rating">
                      <AiFillStar className="star" />
                      <span className="star">{`${model.rating} / 5 `}</span>
                      <span>Ratings</span>
                    </div> */}
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
            );
          })}
        </div>
        {/* <div className="logos_set">
          <AllBrandes />
        </div> */}
      </div>
    </section>
  );
};

export default CarModelsPrice;
