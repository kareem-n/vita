import './Sidebar.css'
import Logo from '../../assets/images/LOGO.png'
import { FaUser } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DoctorOptions from '../../Popus/DoctorOptions/DoctorOptions';
import AddProfile from '../../Popus/AddProfile/AddProfile';

const Sidebar = () => {



  const [popup, setPopup] = useState(false)
  const showPopup = () => {
    setPopup(!popup)
  }

  if (popup) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="content">
          <div className="image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="links">
            <Link to="/NoPatient"><TiHome /></Link>
            <Link to="/X_Rays"><FaUser /></Link>
            <Link onClick={showPopup} to="#"><AiOutlineAppstore /></Link>
            <Link to="/waiting_list"><FaTelegramPlane /></Link>
            <Link to="/Accordion"><MdOutlineQrCodeScanner /></Link>
          </div>
          <div className="logout">
            <Link to={'/login'}>
              <IoMdLogOut />
            </Link>
          </div>
        </div>
      </div>

      {popup && (<DoctorOptions />)}
    </>
  )
}

export default Sidebar