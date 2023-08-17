// ProfilePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../HeaderSec/Header';
import CarDetails from '../CarDetails/CarDetails';
import CarSpecification from '../CarspecifcationSec/CarspecifcationSec';
import FooterSec from '../FooterSec/FooterSec';

const Details = () => {
  return (
    <div>
      <Header/>
      <CarDetails/>
      <CarSpecification/>
      <FooterSec/>
    </div>
  );
};

export default Details;
