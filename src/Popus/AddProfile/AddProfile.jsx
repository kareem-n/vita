import './AddProfile.css'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { InputSubmit } from '../../components/Buttons/Buttons';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const AddProfile = ({ setAddProfileShow }) => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    profileType: "",
    spec: ""
  })
  const [isDoc, setIsDoc] = useState(false);
  const [load, setLoad] = useState(false);
  const [exErr, setExErr] = useState('');
  const [errors, setErrors] = useState({});



  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "doctor" && name === "profileType") {
      setIsDoc(true);
    }
    if (value === "patient") {
      setIsDoc(false);
    }

    setFormData({
      ...formData, [name]: value
    });

    console.log(formData);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = {};
    if (formData.profileType === '') {
      validationErrors.profileType = 'Profile Type Is required'
      e.preventDefault();
    }
    if (!formData.spec.trim() && formData.profileType === "doctor") {
      validationErrors.prove_number = 'Specialization Is required'
      e.preventDefault();
    }

    setErrors(validationErrors);


    if (Object.keys(validationErrors).length === 0) {
      // navigate('/waiting_list')
      setLoad(true);
      switch (formData.profileType) {
        case 'doctor':
          axios.post(`https://blissful-gentleness-production.up.railway.app/users/auth/add-doctor-profile?specialization=${formData.spec}`, {}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }).then(res => {
            if (res.data === false) {
              setExErr("Already in type");
            }
            // console.log(res.data);
            setLoad(false)
          }).catch(err => {
            setLoad(false);
            setExErr("something went wrong try again !");
            console.log(err);
          })
          break;
        case 'patient':
          axios.post(`https://blissful-gentleness-production.up.railway.app/users/auth/add-patient-profile`, {}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }).then(res => {
            if (res.data === false) {
              setExErr("Already in type");
            } else {
              window.location.reload();
            }
            setLoad(false)
          }).catch(err => {
            setLoad(false);
            setExErr("something went wrong try again !");
            console.log(err);
          })
          break;

        default:
          break;
      }

      console.log();

    }
  }
  const [popup, setPopup] = useState(true);
  const hide = () => {
    setPopup(false);
    setAddProfileShow(false)
  }
  if (popup) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      {popup && (
        <div className='overlay d-flex justify-content-center align-items-center'>
          <div className="popup">
            <h3 className="text-center mb-3">Add Profile</h3>

            {
              exErr && <div className="bg-danger text-white rounded-2 p-2 mb-2">
                {exErr}
              </div>
            }
            <form onSubmit={handleSubmit}>
              <div className="profileType">
                <label htmlFor="profileType">Profile Type <span>*</span></label>
                <select defaultValue="profileType" id='profileType' name='profileType' onChange={handleChange}>
                  <Link to={'/UserInfo'}>
                    <option value="Patient">Patient</option>

                  </Link>
                  <option value="profileType" disabled>Profile Type</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
                {errors.profileType && <div className='alert alert-danger mt-2'>{errors.profileType}</div>}
              </div>
              {
                isDoc && <div className="prove_number">
                  <label htmlFor="prove_number">Specialization <span>*</span></label>
                  <input type="text" name='spec' onChange={handleChange} />


                  {errors.prove_number && <div className='alert alert-danger mt-2'>{errors.prove_number}</div>}
                </div>
              }

              <InputSubmit>Add</InputSubmit>
            </form>
            <div className="close">
              <FaXmark onClick={hide} />
            </div>
          </div>

          {
            load && <div className="bg-danger position-absolute">
              <Loader />
            </div>
          }
        </div>
      )}
    </>
  )
}

export default AddProfile