import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import img1 from "../Assets/honda/honda/honda_1_side.jpg";
import img2 from "../Assets/honda/honda/honda_2_side.jpg";
import img3 from "../Assets/honda/honda/honda_3_side.jpg";
import img4 from "../Assets/honda/honda/honda_4_side.jpg";
import Data from "../Data/Data.json";

const SimpleSlider = ({ id }) => {
  console.log(id);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2 className="single_item">Single Item</h2>

      <Slider {...settings}>
        {id.map((e) => {
          return <img src={e.img} className="imgonecar" />;
        })}

        {/* <div>
          <h3><img src={img2} className='imgonecar'/></h3>
        </div>
        <div>
          <h3><img src={img3} className='imgonecar'/></h3>
        </div>
        <div>
          <h3><img src={img4} className='imgonecar'/></h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
