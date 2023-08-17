import React, { useState } from 'react';
import './Comparing.css';
import '../Accordion/Accordion.css';
import { CgCompress } from 'react-icons/cg';
import { ImCancelCircle } from 'react-icons/im';
import carlogo1 from '../Assets/honda.jpg';
import carlogo2 from '../Assets/audi.jpg';
import { Link, useNavigate } from 'react-router-dom';
import DataSpec from '../Data/DataSpec.json'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Comparing() {
  console.log(DataSpec);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSecondBoxPopupVisible, setSecondBoxPopupVisible] = useState(false);
  const cars = [
    { id: 1, image_url: '../Assets/select-car.jpg', name: 'Select Car', logo: carlogo1 },
    { id: 2, image_url: '../Assets/select-car.jpg', name: 'Select Car', logo: carlogo2 },
  ];

  const navigate = useNavigate("")

  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleImageClick2 = () => {
    setSecondBoxPopupVisible(true);
  }

  const handleSecondBoxClosePopup = () => {
    setSecondBoxPopupVisible(false);
  };

 

  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedSecondCar, setSelectedSecondCar] = useState(null);

const [cardetail,setCardetails]=useState([]);

  // image set
  const [img,setImage]=useState(cars[0])
  console.log(img)
  const [img2,setImage2]=useState(cars[1])
  console.log(img2)

  // filter datas
              
  let maruthi = DataSpec.find((e)=>e.id=="1")
  let hyundai = DataSpec.find((e)=>e.id=="2")
  let tata = DataSpec.find((e)=>e.id=="3")
  let bmw = DataSpec.find((e)=>e.id=="4")
  let mahindra = DataSpec.find((e)=>e.id=="5")
  let toyota = DataSpec.find((e)=>e.id=="6")
  let kia = DataSpec.find((e)=>e.id=="7")
  let mg = DataSpec.find((e)=>e.id=="8")
  let audi = DataSpec.find((e)=>e.id=="9")
  let landrover = DataSpec.find((e)=>e.id=="10")
console.log(landrover)

  return (
    <div>
      <section className='container compaingSection'>
        <h1>Compare Cars</h1>
        <br />
        <div className='flex-container compareing_container'>
          {/* {cars.map((car) => ( */}
            <div  className='flex-item-6 compare_div'>
              <img
                src={img.image_url}
                alt='logo'
                className='com_car_logo'
                onClick={() => handleImageClick()}
              />
              <div className='com_cont'>
                <p className='selectCars'>{img.model_name}</p>
                <h4>{img.price}</h4>
              </div>
              <p className='selectCars'>Select Car</p>
            </div>
            <div className='flex-item-6 compare_div'>
              <img
                src={img2.image_url}
                alt='logo'
                className='com_car_logo'
                onClick={() => handleImageClick2()}
              />
              <div className='com_cont'>
                <p className='selectCars'>{img2.model_name}</p>
                <h4>{img2.price}</h4>
              </div>
              <p className='selectCars'>Select Car</p>
            </div>                                 
          {/* ))} */}
          <CgCompress className='compress' />
        </div>
         <button type='button' className='compare_button' onClick={()=>navigate(`/ComparingSec/${img.model_name}/${img2.model_name}`)}>
          Compare
        </button> 
        

        {isPopupVisible && (
          <div className='container'>
            <div className='popsec popupSection'>
              <div className='selectBrandBtn'>
              <h2>Select Your Brand or Model</h2>
              <button onClick={handleClosePopup}  className='btnCancel'>X</button>
              </div>
              <div className='head_img_pop'></div>
              <div className='logo-container'>
                <div className='scroldiv'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
              <img src='../Assets/maruti-suzuki1647009823420.jpg' alt='logo' className='logo_pop_car'/>
              <b>Maruti Suzuki</b>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
            {
               maruthi.model.map((item)=>{
                return(
                  <>
                   <tr>
                      <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                   </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
            <img src='../Assets/hyundai.jpg' alt='logo' className='logo_pop_car'/>
            <b>Hyundai</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               hyundai.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
              <img src='../Assets/tata.jpg' alt='logo' className='logo_pop_car'/>
              <b>Tata</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               tata.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/bmw.jpg' alt='logo' className='logo_pop_car'/>
            <b>BMW</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               bmw.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><div className='pop_logo_brand'>
            <img src='../Assets/mahindra.jpg' alt='logo' className='logo_pop_car'/>
            <b>Mahindra</b>
            </div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               mahindra.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/toyota.jpg' alt='logo' className='logo_pop_car'/>
            <b>Toyota</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               toyota.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/kia.jpg' alt='logo' className='logo_pop_car'/>
            <b>Kia</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               kia.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/mg.jpg' alt='logo' className='logo_pop_car'/>
            <b>MG</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               mg.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/audi.jpg' alt='logo' className='logo_pop_car'/>
            <b>Audi</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               audi.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/land-rover1647236056893.jpg' alt='logo' className='logo_pop_car'/>
            <b>Land Rover</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               landrover.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=>{ setImage(item); handleClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                {/* If you want to render the logo dynamically based on the selected car */}
                {/* <img src={selectedCar.logo} className='logoforpop' alt='logo' /> */}
              </div>
            </div>
          </div>
        ) }

        {isSecondBoxPopupVisible && (
          <div className='container'>
            <div className='popsec popupSection'>
              <div className='selectBrandBtn'>
              <h2>Select Your Brand or Model</h2>
              <button onClick={handleSecondBoxClosePopup} className='btnCancel'>X</button>
              </div>
              <div className='head_img_pop'></div>
              <div className='logo-container'>
                <div className='scroldiv'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
              <img src='../Assets/maruti-suzuki1647009823420.jpg' alt='logo' className='logo_pop_car'/>
              <b>Maruti Suzuki</b>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
            {
               maruthi.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={() => { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
            <img src='../Assets/hyundai.jpg' alt='logo' className='logo_pop_car'/>
            <b>Hyundai</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               hyundai.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className='pop_logo_brand'>
              <img src='../Assets/tata.jpg' alt='logo' className='logo_pop_car'/>
              <b>Tata</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               tata.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/bmw.jpg' alt='logo' className='logo_pop_car'/>
            <b>BMW</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               bmw.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><div className='pop_logo_brand'>
            <img src='../Assets/mahindra.jpg' alt='logo' className='logo_pop_car'/>
            <b>Mahindra</b>
            </div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               mahindra.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/toyota.jpg' alt='logo' className='logo_pop_car'/>
            <b>Toyota</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               toyota.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/kia.jpg' alt='logo' className='logo_pop_car'/>
            <b>Kia</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               kia.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/mg.jpg' alt='logo' className='logo_pop_car'/>
            <b>MG</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               mg.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/audi.jpg' alt='logo' className='logo_pop_car'/>
            <b>Audi</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               audi.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <div className='pop_logo_brand'>
            <img src='../Assets/land-rover1647236056893.jpg' alt='logo' className='logo_pop_car'/>
            <b>Land Rover</b>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
          {
               landrover.model.map((item)=>{
                return(
                  <>
                   <tr>
                  <td className='td' onClick={()=> { setImage2(item); handleSecondBoxClosePopup(); }}>{item.model_name}</td>
                </tr>
                  </>
                )
               })
            }
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                {/* If you want to render the logo dynamically based on the selected car */}
                {/* <img src={selectedCar.logo} className='logoforpop' alt='logo' /> */}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Comparing;
