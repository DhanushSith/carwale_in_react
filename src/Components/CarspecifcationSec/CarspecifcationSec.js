import React from "react";
import "./CarspecifcationSec.css";
import { useParams } from 'react-router-dom';
import { VscTag } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { LiaHandshake } from "react-icons/lia";
import Data from "../Data/Data.json";


function CarSpecification() {
  const { featuredcarId } = useParams();
  const selectedBrand = Data.find((brand) => brand.id === parseInt(featuredcarId));
  console.log(selectedBrand);

  if (!selectedBrand) {
    return <div>Brand not found</div>;
  }
  return (
    <>
      <section className="specifications">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item-8">
              <div className="flex-container left_spc">
                <div className="flex-item-1">
                  <VscTag className="tag" />
                </div>
                <div className="flex-item-8">
                  <h4 className="contact_head">Contact Maruti Suzuki</h4>
                  <div className="call">
                    <BsTelephone />
                    <h5>18002090230</h5>
                  </div>
                  <p className="call_down_para">
                    Get in touch for the best buying option from your authorized
                    dealer
                  </p>
                </div>
                <div className="flex-item-3">
                  <button className="assistance">Get Assistance</button>
                </div>
              </div>
              <br />
              <br />
              <h4>Maruti Invicto Car Specifications</h4>
              <br />
              <div className="flex-container">
                <table style={{ width: "100%" }}>
                  <tr>
                    <td className="tdsix">
                      <p>price</p>
                      <h6>{selectedBrand.details.pricing}</h6>
                    </td>
                    <td className="tdsix">
                      <p>Mileage</p>
                      <h6>{selectedBrand.details.mileage}</h6>
                    </td>
                    <td className="tdsix">
                      <p>Engine</p>
                      <h6>{selectedBrand.details.engine}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdsix">
                      <p>Fuel Type</p>
                      <h6>{selectedBrand.details.fule}</h6>
                    </td>
                    <td className="tdsix">
                      <p>Safety</p>
                      <h6>{selectedBrand.details.Safety}</h6>
                    </td>
                    <td className="tdsix">
                      <p>Seating Capacity</p>
                      <h6>{selectedBrand.details.seating}</h6>
                    </td>
                  </tr>
                </table>
              </div>
              <br />
              <br />
              <h4>All New Maruti Invicto Summary</h4>
              <br />
              <div className="left_spc">
                <h5 className="pei">Latest Update</h5>
                <p>
                  Maruti Invicto reaches dealerships in India
                  <h5 className="pei">Price</h5>
                  <h6 className="readmore">Read More</h6>
                </p>
              </div>
              <br />
            </div>

            <div className="flex-item-4">
              <div className="right_hand">
                <LiaHandshake className="handshake" />
                <div className="white_box_inn_hand">
                  <h3 className="nametwo_box">Name</h3>
                  <div className="call">
                    <BsTelephone />
                    <h5>18002090230</h5>
                  </div>
                  <hr />
                  <p className="call_down_para">
                    Get in touch with Authorized Maruti Suzuki Dealership on
                    call for best buying options like:
                  </p>
                  <div className="call separate">
                    <p>Doorstep Demo</p>
                    <p>Offers and Discounts</p>
                  </div>
                  <div className="call separate">
                    <p>Lowest Emi</p>
                    <p>Exchange Benefits</p>
                  </div>
                  <a href="##" className="getTheBestDeal">
                    Get The Best Deal
                  </a>
                </div>
              </div>
              <br/>
              <h4>Maruti Invicto Price in India</h4>
              <div className="right_hand2">
                <div className="call separate pad">
                  <h5>City</h5>
                  <h5>On-Road Prices</h5>
                </div>
                <hr/>
                <div className="call pad">
                  <p className="city">Mumbai</p>
                  <p>{selectedBrand.details.munbai}</p>
                </div>
                <hr/>
                <div className="call pad">
                  <p className="city">Bangalore</p>
                  <p>{selectedBrand.details.bangalore}</p>
                </div>
                <hr/>
                <div className="call pad">
                  <p className="city">Delhi</p>
                  <p>{selectedBrand.details.delhi}</p>
                </div>
                <hr/>
                <div className="call pad">
                  <p className="city">Pune</p>
                  <p>{selectedBrand.details.pune}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarSpecification;
