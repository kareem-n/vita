import './AddProfile.css'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { InputSubmit } from '../../components/Buttons/Buttons';

const AddProfile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    profileType:"",
    prove_number:""
  })
  const [errors, setErrors] = useState({});
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e) =>{
    const validationErrors = {};
    if(formData.profileType === ''){
      validationErrors.profileType = 'Profile Type Is Requried'
      e.preventDefault();
    }
    if(!formData.prove_number.trim()){
      validationErrors.prove_number = 'Prove Number Is Requried'
      e.preventDefault();

    }

    setErrors(validationErrors);
    if(Object.keys(validationErrors).length === 0){
      navigate('/waiting_list')
    }
  }
  const [popup , setPopup] = useState(true);
  const hide = () =>{
    setPopup(false)
  }
  if(popup){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      {popup && (
        <div className='overlay d-flex justify-content-center align-items-center'>
          <div className="popup">
            <h3 className="text-center mb-3">Add Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="profileType">
                <label htmlFor="profileType">Profile Type <span>*</span></label>
                <select defaultValue="profileType" id='profileType' name='profileType' onChange={handleChange}>
                  <Link to={'/UserInfo'}>
                    <option value="Patient">Patient</option>

                  </Link>
                  <option value="profileType" disabled>Profile Type</option>
                  <option value="doctor">Doctor</option>
                </select>
                {errors.profileType && <div className='alert alert-danger mt-2'>{errors.profileType}</div>}
              </div>
              <div className="prove_number">
                <label htmlFor="prove_number">Prove Number <span>*</span></label>
                <input type="number" placeholder='Enter Prove Number' id='prove_number' name='prove_number' onChange={handleChange}/>
                {errors.prove_number && <div className='alert alert-danger mt-2'>{errors.prove_number}</div>}
              </div>
              <InputSubmit>Add</InputSubmit>
            </form>
            <div className="close">
              <FaXmark onClick={hide}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddProfile