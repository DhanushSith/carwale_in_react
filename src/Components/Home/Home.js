// HomePage.js

import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../HeaderSec/Header';
import Banner from '../BannerSec/Banner';
import AllBrandes from '../AllBrandesSec/AllBrandes';
import FooterSec from '../FooterSec/FooterSec';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import Comparing from '../Comparing/Comparing';
import FindCarPrice from '../FindCarPrice/FindCarPrice';
import Bannertwo from '../Bannertwo/Bannertwo';

const Home = () => {

  let a = localStorage.getItem("serachName");
  console.log(a);
  
  return (
    <>
      <Header />  
      <Banner/>
      <FeaturedCars/>
      <AllBrandes/>
      <FindCarPrice/>
      <Bannertwo/>
      <Comparing/>
      <FooterSec/>
    </>
  );
};

export default Home;
