import './AddProfile.css'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { InputSubmit } from '../../components/Buttons/Buttons';
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { data } from 'autoprefixer';

const AddProfile = ({ setAddProfileShow }) => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    profileType: "",
    spec: "",
    organizationName: '',
    email: '',
    location: '',

  })
  const [isPhar, setIsPhar] = useState(false);
  const [isDoc, setIsDoc] = useState(false);
  const [isX, setIsX] = useState(false);
  const [load, setLoad] = useState(false);
  const [exErr, setExErr] = useState('');
  const [errors, setErrors] = useState({});



  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "doctor" && name === "profileType") {
      setIsDoc(true);
      setIsX(false);
      setIsPhar(false);
    }
    if (value === "patient") {
      setIsDoc(false);
      setIsX(false)
      setIsPhar(false)
    }

    if (value === "xray_lab" && name === "profileType") {
      setIsX(true);
      setIsDoc(false);
      setIsPhar(false);
    }
    if (value === "pharmacy" && name === "profileType") {
      setIsPhar(true);
      setIsX(false);
      setIsDoc(false);
    }

    setFormData({
      ...formData, [name]: value
    });

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
    if (!formData.organizationName.trim()
      && (formData.profileType === "xray_lab" || formData.profileType === "pharmacy")) {
      validationErrors.organizationName = 'organizationName Is required'
      e.preventDefault();
    }
    if (!formData.email.trim() && (formData.profileType === "xray_lab" || formData.profileType === "pharmacy")) {
      validationErrors.email = 'email Is required'
      e.preventDefault();
    }
    if (!formData.location.trim() && (formData.profileType === "xray_lab" || formData.profileType === "pharmacy")) {
      validationErrors.location = 'location Is required'
      e.preventDefault();
    }

    setErrors(validationErrors);


    if (Object.keys(validationErrors).length === 0) {
      // navigate('/waiting_list')
      setLoad(true);
      switch (formData.profileType) {
        case 'doctor':
          axios.post(`https://vitaapp.azurewebsites.net/users/auth/add-doctor-profile`, {
            specialization: formData.spec
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }).then(res => {
            if (res.data === false) {
              setExErr("Already in type");
            }
            // console.log(res.data);
            setLoad(false)
            window.location.reload();
          }).catch(err => {
            setLoad(false);
            setExErr(err.response.data);
            console.log(err);
          })
          break;
        case 'patient':
          axios.post(`https://vitaapp.azurewebsites.net/users/auth/add-patient-profile`, {}, {
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
            setExErr(err.response.data);
            console.log(err);
          })
          break;
        case 'xray_lab':
          axios.post(`https://vitaapp.azurewebsites.net/users/auth/add-xray-laboratory-profile`, {
            organizationName: formData.organizationName,
            email: formData.email,
            location: formData.location
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }).then(res => {
            if (res.data === false) {
              setExErr("Already in type");
            }
            console.log(res.data);
            setLoad(false)
            // window.location.reload();
          }).catch(err => {
            setLoad(false);
            setExErr(err.response.data);
            console.log(err);
          })
          break;
        case 'pharmacy':
          axios.post(`https://vitaapp.azurewebsites.net/users/auth/add-pharmacy-profile`, {
            organizationName: formData.organizationName,
            email: formData.email,
            location: formData.location
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }).then(res => {
            if (res.data === false) {
              setExErr("Already in type");
            }
            console.log(res.data);
            setLoad(false)
            // window.location.reload();
          }).catch(err => {
            console.log(555);
            setLoad(false);
            setExErr(err.response.data);
            console.log(err);
          })
          break;


        default:
          break;
      }


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
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="xray_lab">XRays Lab</option>
                  <option value="tests_lab">Tests Lab</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
                {errors.profileType && <div className='alert alert-danger mt-2'>{errors.profileType}</div>}
              </div>
              {
                isDoc && <>
                  <div className="prove_number">
                  <label htmlFor="prove_number">Specialization <span>*</span></label>
                  <input type="text" name='spec' onChange={handleChange} />


                  {errors.prove_number && <div className='alert alert-danger mt-2'>{errors.prove_number}</div>}
                </div>
                <div className="prove_number">
                <label htmlFor="prove_number">Prove Number <span>*</span></label>
                <input type="number" name='prove' required/>
              </div>
                </>
              }

              {
                isX && <div className="">
                  <div className="">
                    <label className='w-100'>organization Name</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='organizationName' type="text" />

                    {errors.organizationName && <div className='alert alert-danger mt-2'>{errors.organizationName}</div>}
                  </div>
                  <div className="mt-2">
                    <label className='w-100'>email</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='email' type="text" />
                    {errors.email && <div className='alert alert-danger mt-2'>{errors.email}</div>}
                  </div>
                  <div className="mt-2">
                    <label className='w-100'>location</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='location' type="text" />

                    {errors.location && <div className='alert alert-danger mt-2'>{errors.location}</div>}
                  </div>

                </div>
              }
              {
                isPhar && <div className="">
                  <div className="">
                    <label className='w-100'>organization Name</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='organizationName' type="text" />

                    {errors.organizationName && <div className='alert alert-danger mt-2'>{errors.organizationName}</div>}
                  </div>
                  <div className="mt-2">
                    <label className='w-100'>email</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='email' type="text" />
                    {errors.email && <div className='alert alert-danger mt-2'>{errors.email}</div>}
                  </div>
                  <div className="mt-2">
                    <label className='w-100'>location</label>
                    <input style={{
                      outline: 'none'
                    }} className='w-100 py-1 px-2 mt-2 rounded-3 border-0' onChange={handleChange} name='location' type="text" />

                    {errors.location && <div className='alert alert-danger mt-2'>{errors.location}</div>}
                  </div>

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