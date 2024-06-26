import './Sidebar.css'
import Logo from '../../assets/images/LOGO.png'
import { FaUser } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DoctorOptions from '../../Popus/DoctorOptions/DoctorOptions';
import AddProfile from '../../Popus/AddProfile/AddProfile';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserDet } from '../../redux/slices/UserSlice';
import PatientAccess from '../../Popus/PatientAccess/PatientAccess';
import NoPatient from '../NoPatient/NoPatient';
import PatientOptions from './../../Popus/PatientOptions/PatientOptions';

const Sidebar = () => {

  const { type, accessP } = useSelector(state => state.user);


  const dispatch = useDispatch();

  const [popup, setPopup] = useState(false)

  const showPopup = () => {
    setPopup(!popup)
  }

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [popup])



  const [showPP, setShowPP] = useState(false);


  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="content">
          <div className="image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="links">
            <Link to={type === "doctor" ? "/Posters" : '/Posters'}><TiHome /></Link>
            {/* <Link to={type === "doctor" ? "/NoPatient" : '/userInfo'}><TiHome /></Link> */}
            <Link to="/Profile"><FaUser /></Link>
            <Link onClick={type === "patient" ? showPopup : accessP && setShowPP(true)} to={type === "doctor" && '/nopatient'}><AiOutlineAppstore /></Link>
            <Link to="/waiting_list"><FaTelegramPlane /></Link>
            <Link to="/QRCode"><MdOutlineQrCodeScanner /></Link>
          </div>
          <Link className="logout" onClick={() => {
            localStorage.clear();
            dispatch(setUser(null))
            dispatch(setUserDet(null));
          }} to={'/login'}>
            <IoMdLogOut />
          </Link>
        </div>
      </div>

      {popup && type === "patient" && <div className="">
        <PatientOptions popup={popup} setPopup={setPopup} />
      </div>
      }
      {popup && type === "doctor" && <div className="">
        <DoctorOptions popup={popup} setPopup={setPopup} />
      </div>
      }



    </>
  )
}

export default Sidebar