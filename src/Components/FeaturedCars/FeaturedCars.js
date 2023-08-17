import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './FeaturedCars.css';

const Resizable = () => {
  const featuredcar = [
    { id: 11, src: "../Assets/honda/honda1.jpg", alt: 'Honda', price:"Rs. 6.00 Lakh" },
    { id: 2, src: "../Assets/hyundai/hyundai1.jpg", alt: 'Hyundai', price:"Rs. 7.10 Lakh" },
    { id: 7, src: "../Assets/kia/kia1.jpg", alt: 'Kia', price:"Rs. 6.58 Lakh" },
    { id: 5, src: "../Assets/mahindra/mahindra1.jpg", alt: 'Mahindra', price:"Rs. 9.10 Lakh" },
    { id: 12, src: "../Assets/skoda/skoda1.jpg", alt: 'Skoda', price:"Rs. 7.00 Lakh" },
    { id: 3, src: "../Assets/tata/tata1.jpg", alt: 'Tata', price:"Rs. 8.30 Lakh" },
  ];

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(1100);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const increaseWidth = () => {
    setWidth(prevWidth => prevWidth + 100);
  };

  const decreaseWidth = () => {
    setWidth(prevWidth => prevWidth - 100);
  };

  const toggleDisplay = () => {
    setDisplay(prevDisplay => !prevDisplay);
  };

  return (
    <div className="container featured_Cars">
      <h2> Featured Cars </h2>
      <div 
        style={{
          width: `${width}px`,
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings} className="srl_div">
          {featuredcar.map(car => (
            <div key={car.id} className="sli_hom_img">
              <Link to={`/Details/${car.id}`} className="link_car">
                <div className="contenet">
                <img src={car.src} alt={car.alt} className="carimg" />
                <div className="img_down_cont">
                <p>{car.alt}</p>
                <div style={{display:"flex", alignItems:"baseline",}}><h3>{car.price}</h3><p className="onwerds">Onwerds</p></div>
                <p>Avg. Ex-Showroom price</p>
                <button type="button" className="showprice_Btn">Show price in my city</button>
                </div>
                </div>
                </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Resizable;
