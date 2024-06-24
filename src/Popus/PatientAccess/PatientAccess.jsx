import './PatientAccess.css'
import Patient from '../../assets/images/Patient.png'
import { Link } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setAccessP } from '../../redux/slices/UserSlice'
import DoctorOptions from '../DoctorOptions/DoctorOptions'
import axios from 'axios'

const PatientAccess = () => {
  const [popup, setPopup] = useState(true);

  const dispatch = useDispatch();


  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {


    setLoad(true);
    axios.get("https://vita-production.up.railway.app/doctors/get-list-of-connections", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {

      const tmp = [];
      res.data.map(item => {
        axios.get(`https://vita-production.up.railway.app/users/auth/get-image?username=${item.username}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`
          }, responseType: 'arraybuffer'
        }).then(ress => {
          const base64 = convertArrayBufferToBase64(ress.data);
          const image = `data:image/jpeg;base64,${base64}`;


          item = { ...item, image };
          tmp.push(item);
          // setData(tmp)

        })

      })

      setTimeout(() => {
        setData(tmp);
        setLoad(false);
      }, 2000);

      // setData(tmp);

      console.log(res.data);


    })

  }, [])


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
      {popup ? <>
        {
          data && <div className='overlay d-flex justify-content-center align-items-center'>
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
        }
      </>
        : <DoctorOptions />}
    </>
  )
}

export default PatientAccess