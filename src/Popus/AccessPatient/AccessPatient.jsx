import './AccessPatient.css'
import Eye from '../../assets/images/big Eye.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const AccessPatient = () => {
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
            <Link to={'/patientAccess'} className='box'>
              <img src={Eye} alt="" />
              <h3>access patient</h3>
            </Link>
            <div className="close">
              <FaXmark onClick={hide}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AccessPatient