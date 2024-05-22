import './NoPatient.css'
import Union from '../../assets/images/Union.png'
import Eye from "../../assets/images/eye.png";
import { useState } from 'react';
import AccessPatient from '../../Popus/AccessPatient/AccessPatient';

const NoPatient = () => {
  const [popup , setPopup] = useState(false)
  const showPopup = () =>{
    setPopup(!popup)
  }

  if(popup){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }

  return (
    <>
    <div className='NoPatient'>
      <h1>No patient to access..</h1>
      <img src={Union} alt="" />
      <button onClick={showPopup}>
        <img src={Eye} alt="" />
        <span>Access Patient</span>
      </button>
    </div>
      {popup && (
        <AccessPatient/>
      )}
    </>
  )
}

export default NoPatient