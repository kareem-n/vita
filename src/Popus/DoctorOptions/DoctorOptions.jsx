import './DoctoeOptions.css'
import image_01 from "../../assets/images/Group 1171275817.svg";
import image_02 from "../../assets/images/Group 1171275818.svg";
import image_03 from "../../assets/images/Group 1171275808.svg";
import image_04 from "../../assets/images/Group 1171275809.svg";
import image_05 from "../../assets/images/Group 1.svg";
import image_06 from "../../assets/images/Group 1171275811.svg";
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { useState } from 'react';

const DoctorOptions = () => {
  const [popup , setPopup] = useState(true);
  const hide = () =>{
    setPopup(false)
  }
  if(popup){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  
  return (
    <>

    {popup && (

      <div className='overlay d-flex justify-content-center align-items-center'>
        <div className="popup">
          <div className="DoctorOptions">
            <Link to={""} className="option">
              <img src={image_01} alt="" />
              <h3>Close patient</h3>
            </Link>
            <Link className="option">
              <img src={image_02} alt="" />
              <h3>General info</h3>
            </Link>
            <Link className="option">
              <img src={image_03} alt="" />
              <h3>Tests</h3>
            </Link>
            <Link className="option">
              <img src={image_04} alt="" />
              <h3>X-Rays</h3>
            </Link>
            <Link className="option">
              <img src={image_05} alt="" />
              <h3>Prescriptions</h3>
            </Link>
            <Link className="option">
              <img src={image_06} alt="" />
              <h3>Add prescription</h3>
            </Link>
          </div>
          <div className="close">
            <FaXmark onClick={hide}/>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default DoctorOptions;