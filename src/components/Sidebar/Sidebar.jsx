import './Sidebar.css'
import Logo from '../../assets/images/LOGO.png'
import { FaUser } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DoctorOptions from '../../Popus/DoctorOptions/DoctorOptions';
import AddProfile from '../../Popus/AddProfile/AddProfile';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserDet } from '../../redux/slices/UserSlice';

const Sidebar = () => {

  const { type } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [popup, setPopup] = useState(false)
  const showPopup = () => {
    console.log(0);
    setPopup(!popup)
  }

  useEffect(() => {


    console.log(popup);
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [popup])




  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="content">
          <div className="image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="links">
            <Link to={type === "doctor" ? "/NoPatient" : '/userInfo'}><TiHome /></Link>
            <Link to="/X_Rays"><FaUser /></Link>
            <Link onClick={showPopup} to="#"><AiOutlineAppstore /></Link>
            <Link to="/waiting_list"><FaTelegramPlane /></Link>
            <Link to="/Accordion"><MdOutlineQrCodeScanner /></Link>
          </div>
          <div className="logout">
            <Link onClick={() => {
              localStorage.clear();
              dispatch(setUser(null))
              dispatch(setUserDet(null));
            }} to={'/login'}>
              <IoMdLogOut />
            </Link>
          </div>
        </div>
      </div>

      {popup && <DoctorOptions popup={popup} setPopup={setPopup} />}
    </>
  )
}

export default Sidebar