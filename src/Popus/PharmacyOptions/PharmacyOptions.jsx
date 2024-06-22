import './PharmacyOptions.css'
import image_01 from "../../assets/images/Group 1171275817.svg";
import image_02 from "../../assets/images/Group 1171275818.svg";
import image_05 from "../../assets/images/Group 1.svg";
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";

const PharmacyOptions = () => {
  const hide = () => {
    setPopup(false)
  }
  return (
    <div className='overlay d-flex justify-content-center align-items-center'>
      <div className="popup">
        <div className="PharmacyOptions">
          <Link to={""} className="option">
            <img src={image_01} alt="" />
            <h3>Close patient</h3>
          </Link>
          <Link to={'/userInfo'} className="option">
            <img src={image_02} alt="" />
            <h3>General info</h3>
          </Link>
          <Link to={'/Prescriptions_2'} className="option">
            <img src={image_05} alt="" />
            <h3>Prescriptions</h3>
          </Link>
        </div>
        <div className="close">
          <FaXmark onClick={hide} />
        </div>
      </div>
    </div>
  )
}

export default PharmacyOptions;