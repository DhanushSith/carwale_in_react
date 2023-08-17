import React from 'react';
import './Accordion.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import DataSpec from '../Data/DataSpec.json';

export default function BasicAccordion() {

  const {id1,id2}=useParams();
  console.log(id1,+" fvv"+id2);
  console.log(DataSpec)


  const modelone = DataSpec.reduce((foundModel, car) => {
    if (foundModel) return foundModel; // If modelone is already found, return it directly
  
    const model = car.model.find((model) => model.model_name === id1);
    return model ? { ...model, brand: car.name } : null;
  }, null);
  
  console.log(modelone);

  const modeltwo = DataSpec.reduce((foundModel, car) => {
    if (foundModel) return foundModel; // If modeltwo is already found, return it directly
  
    const model = car.model.find((model) => model.model_name === id2);
    return model ? { ...model, brand: car.name } : null;
  }, null);
  
  console.log(modeltwo); 

  const imgcar = modelone.image_url
  console.log(modelone.image_url)

  return (
    <>
    <section className='car_comp_sec'>
      <div className='container contence'>
        <div className='flex-container justify_div_car'>
          <div className='flex-item-4 car_img_div first_space'>
              <div>
              <h3>{modelone.model_name} / {modeltwo.model_name}</h3>
              <h4>Comparing Car Details here</h4>
              </div>
            </div>
            <div className='flex-item-4 car_img_div'>
              <img src={imgcar} alt='car1'  className='carimg_top'/>
              <h1>{modelone.model_name}</h1>
              <h3>{modelone.price}</h3>
            </div>
            <div className='flex-item-4 car_img_div'>
              <img src={modeltwo.image_url} alt='car1'  className='carimg_top'/>
              <h1>{modeltwo.model_name}</h1>
              <h3>{modeltwo.price}</h3>
            </div>
        </div>
      </div>
    </section>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Engine & Transmission</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <table>
              <thead>
                <tr>
                  <th>Engine</th>
                  <td className='td'>{modelone.engine}</td>
                  <td className='td'>{modeltwo.engine}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Engine Type</th>
                    <td className='td'>{modelone.engine_type}</td>
                    <td className='td'>{modeltwo.engine_type}</td>

                 
                </tr>
                <tr>
                <th>Fuel Type</th>
                  <td className='td'>{modelone.fual_type}</td>
                  <td className='td'>{modeltwo.fual_type}</td>
                  
                </tr>
                <tr>
                <th>Max Power (bhp@rpm)</th>
                  <td className='td'>{modelone.max_power}</td>
                  <td className='td'>{modeltwo.max_power}</td>
                  
                </tr>
                <tr>
                  <th>Max Torque (Nm@rpm)</th>
                  <td className='td'>{modelone.max_torque}</td>
                  <td className='td'>{modeltwo.max_torque}</td>
                  
                </tr>
                <tr>
                  <th>Mileage (ARAI) (kmpl)</th>
                  <td className='td'>{modelone.mileage}</td>
                  <td className='td'>{modeltwo.mileage}</td>
                </tr>
                <tr>
                  <th>Driving Range (km)</th>
                  <td className='td'>{modelone.driving_range}</td>
                  <td className='td'>{modeltwo.driving_range}</td>
                </tr>
                <tr>
                  <th>Drivetrain</th>
                  <td className='td'>{modelone.drivetrain}</td>
                  <td className='td'>{modeltwo.drivetrain}</td>
                </tr>
                <tr>
                  <th>Teansmission</th>
                  <td className='td'>{modelone.transmission}</td>
                  <td className='td'>{modeltwo.transmission}</td>
                </tr>
                <tr>
                  <th>Emission standard</th>
                  <td className='td'>{modelone.emission_standard}</td>
                  <td className='td'>{modeltwo.emission_standard}</td>
                </tr>
              </tbody>
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
          <Typography><b>Dimension & Weight</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
              <thead>
                <tr>
                  <th>Length (mm)</th>
                  <td className='td'>{modelone.length}</td>
                  <td className='td'>{modeltwo.length}</td>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>width (mm)</th>
                  <td className='td'>{modelone.width}</td>
                  <td className='td'>{modeltwo.width}</td>
                 
                </tr>
                <tr>
                <th>Height (mm)</th>
                <td className='td'>{modelone.height}</td>
                  <td className='td'>{modeltwo.height}</td>
                  
                </tr>
                <tr>
                <th>Weelbase (mm)</th>
                <td className='td'>{modelone.wheelbase}</td>
                  <td className='td'>{modeltwo.wheelbase}</td>
                  
                </tr>
                <tr>
                  <th>Grand Clearance (mm)</th>
                  <td className='td'>{modelone.grandclearance}</td>
                  <td className='td'>{modeltwo.grandclearance}</td>
                  
                </tr>
              </tbody>
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
          <Typography><b>Capacity</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
              <thead>
                <tr>
                  <th>Doors (Doors)</th>
                  <td className='td'>{modelone.doors}</td>
                  <td className='td'>{modeltwo.doors}</td>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Seating Capacity (Person)</th>
                  <td className='td'>{modelone.seating}</td>
                  <td className='td'>{modeltwo.seating}</td>
                 
                </tr>
                <tr>
                <th>No Of Seating Rows (Rows)</th>
                <td className='td'>{modelone.noOfseatingrow}</td>
                  <td className='td'>{modeltwo.noOfseatingrow}</td>
                  
                </tr>
                <tr>
                <th>Bootspace (Litres)</th>
                <td className='td'>{modelone.bootspace}</td>
                  <td className='td'>{modeltwo.bootspace}</td>
                  
                </tr>
                <tr>
                  <th>Fuel Tank Capacity (Litres)</th>
                  <td className='td'>{modelone.fueltankcap}</td>
                  <td className='td'>{modeltwo.fueltankcap}</td>
                  
                </tr>
              </tbody>
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
          <Typography><b>Suspensions, Breakes, Steering & Tyres</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <table>
              <thead>
                <tr>
                  <th>Front Suspension</th>
                  <td className='td'>{modelone.frontsuspention}</td>
                  <td className='td'>{modeltwo.frontsuspention}</td>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Rear Suspension</th>
                  <td className='td'>{modelone.rearsuspention}</td>
                  <td className='td'>{modeltwo.rearsuspention}</td>
                 
                </tr>
                <tr>
                <th>Front Break Type</th>
                <td className='td'>{modelone.frontbreak}</td>
                  <td className='td'>{modeltwo.frontbreak}</td>
                  
                </tr>
                <tr>
                <th>Rear Break Type</th>
                <td className='td'>{modelone.rearbreak}</td>
                  <td className='td'>{modeltwo.rearbreak}</td>
                  
                </tr>
                <tr>
                  <th>Minimun Turning Radius (Metres)</th>
                  <td className='td'>{modelone.minimumTurning}</td>
                  <td className='td'>{modeltwo.minimumTurning}</td>
                  
                </tr>
                <tr>
                  <th>Streeing Type</th>
                  <td className='td'>{modelone.streeringtype}</td>
                  <td className='td'>{modeltwo.streeringtype}</td>
                </tr>
                <tr>
                  <th>Wheels</th>
                  <td className='td'>{modelone.wheels}</td>
                  <td className='td'>{modeltwo.wheels}</td>
                </tr>
                <tr>
                  <th>Spere Wheel</th>
                  <td className='td'>{modelone.sparewheel}</td>
                  <td className='td'>{modeltwo.sparewheel }</td>
                </tr>
                <tr>
                  <th>Front Tyres</th>
                  <td className='td'>{modelone.fronttype}</td>
                  <td className='td'>{modeltwo.fronttype}</td>
                </tr>
                <tr>
                  <th>Rear Tyres</th>
                  <td className='td'>{modelone.reartype}</td>
                  <td className='td'>{modeltwo.reartype}</td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
    </>
  );
}
