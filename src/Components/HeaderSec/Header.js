import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/logo.svg";
import { Link, useNavigate  } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";


function Header() {


const [searchName, setSearchName] = useState("");
const navigate = useNavigate(); 
const handleSearch = () => {
  // Use navigate to change the route
  navigate(`/search/${searchName}`);
};

  return (
    <>
      <header className="header">
        <div className="containers">
          <div className="flex-container head_left">
            <div className="flex-item-7 ">
              <div className="flex-container">
                <div className="flex-item-3">
                  <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="flex-item-3">
                  <h1 className="head_name">NEW CARS</h1>
                </div>
                <div className="flex-item-2">
                  <h1 className="head_name">USED CARS</h1>
                </div>
                <div className="flex-item-4">
                  <h1 className="head_name">REVIEWS & NEWS</h1>
                </div>
              </div>
            </div>
            <div className="flex-item-5">
              <div className="flex-container head_left">
                <div className="flex-item-8">
                <div className="search_bar">
                <input
                  type="search"
                  placeholder="Search"
                  className="search"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <BsSearch className="location-icon seachicon" onClick={handleSearch} />
              </div>
                </div>
                <div className="flex-item-4">
                  <div className="flex-container">
                    <div className="flex-item-4">
                      <IoLocationOutline className="location-icon" />
                    </div>
                    <div className="flex-item-4">
                      <MdGTranslate className="location-icon" />
                    </div>
                    <div className="flex-item-4">
                      <CgProfile className="location-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
