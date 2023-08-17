import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import AllBrandes from '../AllBrandesSecTwo/AllBrandSecTwo';
import Header from '../HeaderSec/Header';
import FooterSec from '../FooterSec/FooterSec';

function SearchResults({ carData }) {
  const { searchName } = useParams();
  console.log(searchName);

  const matchingModels = carData.filter((car) =>
    car.models.find((model) =>
      model.alt.toLowerCase().includes(searchName.toLowerCase())
    )
  );

  console.log(matchingModels);

  return (
    <div>
    <Header/>
    <section className="container car_models">
      <h2>Search Results</h2><h1>{searchName}</h1>
      {matchingModels.length === 0 ? (
        <p>No matching car models found.</p>
      ) : (
        <div className="model-grid">
          {matchingModels.map((car) => (
            <div key={car.id}>
              {car.models.map((model) => (
                <div key={model.id} className="car_div_full">
                  <img src={model.src} alt={model.alt} className="car_div" />
                  <div className="car_content">
                    <div className="car_content_head">
                      <span>
                        {model.alt}
                        <FiChevronRight />
                      </span>

                      <div className="rating">
                        <AiFillStar className="star" />
                        <span className="star">{`${model.rating} / 5 `}</span>
                        <span>Ratings</span>
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
          ))}
          <div className="logos_set">
            <AllBrandes />
          </div>
        </div>
      )}
    </section>
    <FooterSec/>
    </div>
  );
}

export default SearchResults;
