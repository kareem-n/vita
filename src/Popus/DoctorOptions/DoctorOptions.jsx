import './DoctoeOptions.css'
import image_01 from "../../assets/images/Group 1171275817.svg";
import image_02 from "../../assets/images/Group 1171275818.svg";
import image_03 from "../../assets/images/Group 1171275808.svg";
import image_04 from "../../assets/images/Group 1171275809.svg";
import image_05 from "../../assets/images/Group 1.svg";
import image_06 from "../../assets/images/Group 1171275811.svg";
import { Link, useNavigate } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import uploadPost from '../../assets/images/uploadImage.svg'
import { setAccessP } from '../../redux/slices/UserSlice';


const DoctorOptions = ({ setPopup }) => {


  const dispatch = useDispatch();
  const nav = useNavigate();

  const { type, accessP } = useSelector(state => state.user);

  const hide = () => {

    // dispatch(setAccessP(false));
    setPopup(false);
    // setshowtmp(false)

    // nav('/nopatient');
  }

  // if (type === "doctor" && !accessP) {
  //   nav('/nopatient')
  //   return <NoPatient />
  // }

  return (
    <>

      <div className='overlay d-flex justify-content-center align-items-center'>
        <div className="popup doctorOptions">
          <div className="DoctorOptions">
            {
              type === "doctor" && <Link onClick={() => {
                // setshowtmp(false)
                setPopup(false)
                dispatch(setAccessP(false))
              }
              } to={"/noPatient"} className="option">
                <img src={image_01} alt="" />
                <h3>Close patient</h3>
              </Link>
            }

            <Link onClick={() => setPopup(false)} to={'/userInfo'} className="option">
              <img src={image_02} alt="" />
              <h3>General info</h3>
            </Link>
            <Link onClick={() => setPopup(false)} to={'/Charts'} className="option">
              <img src={image_03} alt="" />
              <h3>Tests</h3>
            </Link>
            <Link onClick={() => setPopup(false)} to={'/X_Rays'} className="option">
              <img src={image_04} alt="" />
              <h3>X-Rays</h3>
            </Link>
            <Link onClick={() => setPopup(false)} to={'/Prescriptions_2'} className="option">
              <img src={image_05} alt="" />
              <h3>Prescriptions</h3>
            </Link>
            {
              type === "doctor" && <>
                <Link onClick={() => setPopup(false)} to={'/AddPrescription'} className="option">
                  <img src={image_06} alt="" />
                  <h3>Add prescription</h3>
                </Link>
              </>
            }

          </div>
          <Link to={'#'} onClick={hide} className="close">
            <FaXmark />
          </Link>
        </div>
      </div >





    </>
  )
}

export default DoctorOptions;