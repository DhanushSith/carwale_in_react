import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Details from '../Details/Details';
import CarModels from '../CarModels/CarModels';
import ComparingSec from '../ComparingSec/ComparingSec';
import CarModelPricePage from '../CarModelPricePage/CarModelPricePage';
import { StateContext } from '../Context/StateContext';
import carData from "../Data/Data.json";

// Import CarDetails and SearchResults components
import CarDetails from '../CarDetails/CarDetails'; // Adjust the path as needed
import SearchResults from '../Search/Search'; // Adjust the path as needed

const Routing = () => {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <StateContext.Provider value={{ submittedData, setSubmittedData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:featuredcarId" element={<Details />} />
          <Route path="/CarModels/:brandId" element={<CarModels />} />
          <Route path="/ComparingSec/:id1/:id2" element={<ComparingSec />} />
          <Route path="/CarModelPricePage/:price" element={<CarModelPricePage />} />
          {/* Use the "element" prop to pass props to the components */}
          <Route path="/car/:id" element={<CarDetails carData={carData} />} />
          <Route path="/search/:searchName" element={<SearchResults carData={carData} />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default Routing;
