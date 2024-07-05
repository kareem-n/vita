import './AccessPatient.css'
import Eye from '../../assets/images/big Eye.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import uploadPost from '../../assets/images/uploadImage.svg'
import { useDispatch } from 'react-redux';
import { setAccessP } from '../../redux/slices/UserSlice';
import PatientAccess from '../PatientAccess/PatientAccess';
const AccessPatient = ({ setPopup }) => {


  const [self, setself] = useState(true);

  // const [popup, setPopup] = useState(false);

  const [showtmp, setshowtmp] = useState(false);


  return (
    <>
      {
        self && <div className='overlay d-flex justify-content-center align-items-center'>
          <div className="popup d-flex gap-3">
            <Link onClick={() => {
              setshowtmp(true);
              // setself(false)
              // hide() ;
            }} className='box'>
              <img src={Eye} alt="" />
              <h3>access patient</h3>
            </Link>
            <Link to={'/'} className='box'>
              <img src={uploadPost} alt="" />
              <h3>Upload Post</h3>
            </Link>
            <div className="close">
              <FaXmark onClick={() => {

                if (setPopup) {
                  setPopup(false)
                }else {
                  setself(false)
                }
                // dispatch(setAccessP(false))
              }} />
            </div>
          </div>
        </div>
      }

      {
        showtmp && <PatientAccess setPopup={setPopup} />
      }
    </>
  )
}

export default AccessPatient