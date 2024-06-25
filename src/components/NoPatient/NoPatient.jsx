import './NoPatient.css'
import Union from '../../assets/images/Union.png'
import Eye from "../../assets/images/eye.png";
import { useEffect, useState } from 'react';
import AccessPatient from '../../Popus/AccessPatient/AccessPatient';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/UserSlice';

const NoPatient = () => {

  const dispatch = useDispatch();

  const [Poop, setPoop] = useState(false)
  const showPopup = () => {
    setPoop(!Poop)
  }

  if (Poop) {
    document.body.style.overflow = 'hidden';
  } else {
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
      {Poop && (
        <AccessPatient setPoop={setPoop} />
      )}
    </>
  )
}

export default NoPatient