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
import Loader from './../../components/loader/Loader';

const PatientAccess = ({ setshowtmp, setPoop }) => {


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
    axios.get("https://vitaapp.azurewebsites.net/doctors/get-list-of-connections", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {

      console.log(res.data);

      const tmp = [];
      res.data.map(item => {
        axios.get(`https://vitaapp.azurewebsites.net/users/auth/get-image?username=${item.username}`, {
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


    })

  }, [])


  const navigate = useNavigate()
  const hide = () => {
    setPoop(false);
    setPopup(false)
    navigate('/NoPatient')
  }
  if (popup) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [docOp, setDocOp] = useState(false);


  return (
    <>
      {popup && <>
        {
          data ? <div className='overlay d-flex justify-content-center align-items-center'>
            <div className="popup">
              <h3 className="text-center mb-3">Choose patient to access</h3>
              <div className="patients d-grid">
                {
                  data.map((item, key) => <Link key={key} onClick={() => {
                    dispatch(setAccessP(item.username));
                    setDocOp(true);
                    setPopup(false);
                  }} className="patient">
                    <img style={{
                      width: '50px',
                      height: '50px',
                    }} className='rounded-circle object-fit' src={item.image} alt="" />
                    <h3>{item.username}</h3>
                  </Link>)
                }


              </div>
              <div className="close">
                <FaXmark onClick={hide} />
              </div>
            </div>


          </div> : <div className="position-absolute z-3">
            <Loader />
          </div>
        }
      </>
      }


      {
        docOp && <DoctorOptions setshowtmp={setshowtmp} popup={docOp} setPopup={setDocOp} />
      }
    </>
  )
}

export default PatientAccess