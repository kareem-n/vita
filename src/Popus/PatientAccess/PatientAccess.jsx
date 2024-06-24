import './PatientAccess.css'
import Patient from '../../assets/images/Patient.png'
import { Link } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setAccessP } from '../../redux/slices/UserSlice'
import DoctorOptions from '../DoctorOptions/DoctorOptions'

const PatientAccess = () => {
  const [popup, setPopup] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    
    console.log(popup);
    
  }, [popup])
  

  const navigate = useNavigate()
  const hide = () => {
    setPopup(false)
    // navigate('/NoPatient')
  }
  if (popup) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  return (
    <>
      {popup ? (
        <div className='overlay d-flex justify-content-center align-items-center'>
          <div className="popup">
            <h3 className="text-center mb-3">Choose patient to access</h3>
            <div className="patients d-grid">
              <Link onClick={() => {
                dispatch(setAccessP(true));
                setPopup(false);
              }} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
              <Link to={'/DoctorOptions'} className="patient">
                <img src={Patient} alt="" />
                <h3>Michael Jackson</h3>
              </Link>
            </div>
            <div className="close">
              <FaXmark onClick={hide} />
            </div>
          </div>
        </div>
      ) : <DoctorOptions />}
    </>
  )
}

export default PatientAccess