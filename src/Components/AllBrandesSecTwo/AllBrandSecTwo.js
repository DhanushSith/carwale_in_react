import React from 'react';
import './AllBrandSecTwo.css';
import { Link } from "react-router-dom";
import brand1 from '../Assets/maruti-suzuki1647009823420.jpg'
import brand2 from '../Assets/hyundai.jpg'
import brand3 from '../Assets/tata.jpg'
import brand4 from '../Assets/bmw.jpg'
import brand5 from '../Assets/mahindra.jpg'
import brand6 from '../Assets/toyota.jpg'
import brand7 from '../Assets/kia.jpg'
import brand8 from '../Assets/mg.jpg'
import brand9 from '../Assets/audi.jpg'
import brand10 from '../Assets/land-rover1647236056893.jpg'
import brand11 from '../Assets/honda.jpg'
import brand12 from '../Assets/skoda1681982956420.jpg'
import Sliders from '../Slider/Slider';


const AllBrandes = ({ setDetails }) => {
    const brands = [
      { id: 1, src: brand1, alt: 'Maruti Suzuki' },
      { id: 2, src: brand2, alt: 'Hyundai' },
      { id: 3, src: brand3, alt: 'Tata' },
      { id: 4, src: brand4, alt: 'BMW' },
      { id: 5, src: brand5, alt: 'Mahindra' },
      { id: 6, src: brand6, alt: 'Toyota' },
      { id: 7, src: brand7, alt: 'Kia' },
      { id: 8, src: brand8, alt: 'MG' },
      { id: 9, src: brand9, alt: 'Audi' },
      { id: 10, src: brand10, alt: 'Land Rover' },
      { id: 11, src: brand11, alt: 'Honda' },
      { id: 12, src: brand12, alt: 'Skoda' },
    ];
  
    // const handleClick = (brand) => {
    //     setDetails(brand);
    //   };
  
    // Split the images into rows of six
    const rows = [];
    for (let i = 0; i < brands.length; i += 3) {
      rows.push(brands.slice(i, i + 3));
    }
  
    return (
      
        <section className="allbrand">  
       
        <div className="container">
        {/* <div className='sliderhome'><Sliders/></div> */}
          <h1 className='allbrandhead'>All Brands</h1>
          <table style={{ width: '150%' }}>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((brand) => (
                    <td key={brand.id} className="tds">
                      <Link to={`/CarModels/${brand.id}`} className="links">
                        <img
                          src={brand.src}
                          className="brand_logos"
                          alt={brand.alt}
                        //   onClick={() => handleClick(brand)}
                        />
                        <h6 className="brand_name">{brand.alt}</h6>
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </section>
    );
  };
  
  export default AllBrandes;












