import "./Register.css";
import Vector from "../../assets/images/Vector.png";
import { InputSubmit } from "../../components/Buttons/Buttons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName:"", 
    lastName:"", 
    SSN:'',
    userName:"", 
    mobile:"",
    data: '',
    email: '',
    gender: '',
    marital_status: '',
    password: '',
    cPassword: ''
  });

  const [errors, serErrors] = useState({})
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.firstName.trim()){
      validationErrors.firstName = 'First Name Is Requried'
    }

    if(!formData.lastName.trim()){
      validationErrors.lastName = 'Last Name Is Requried'
    }

    if(!formData.SSN.trim()){
      validationErrors.SSN = 'SSN Is Requried'
    }else if(formData.SSN.length === 14){
    }else{
      validationErrors.SSN = 'SSN Should Be 14 Num'
    }

    
    if(!formData.userName.trim()){
      validationErrors.userName = 'Username Is Requried'
    }else if(formData.userName.includes(" ")){
      validationErrors.userName = 'Invalid username, contains spaces'
    }

    if(!formData.mobile.trim()){
      validationErrors.mobile = 'Mobile Is Requried'
    }else if(/^01[0125][0-9]{9}$/.test(formData.mobile)){
      validationErrors.mobile = 'Mobile Is Not Valid'
    }

    if(!formData.data.trim()){
      validationErrors.data = 'Data Is Requried'
    }

    if(!formData.email.trim()){
      validationErrors.email = 'Email Is Requried'
    }

    if(!formData.password.trim()){
      validationErrors.password = 'Password Is Requried'
    }else if(formData.password.length < 6){
      validationErrors.password = 'password Should Be At Least 6 Char'
    }

    if(!formData.cPassword.trim()){
      validationErrors.cPassword = 'confirm Password Is Requried'
    }else if(formData.cPassword !== formData.password){
      validationErrors.cPassword = 'password Not Matched'
    }

    if(formData.gender === ''){
      validationErrors.gender = 'gender Is Requried'
    }

    if(formData.marital_status === ''){
      validationErrors.marital_status = 'marital_status Is Requried'
    }

    serErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      navigate('/verify')
    }
  }

  return (
    <>
      <section className="register" id="register">
        <div className="container">
          <div className="heading text-center">
            <h1>Register Now</h1>
            <p>Fill the information carefully </p>
          </div>
          <form action="" onSubmit={handleSubmit}>
          <p>Personal Information</p>
            <div className="inputs_name d-grid">
              <div className="input">
                <label htmlFor="first_name">First Name <span>*</span></label>
                <input type="text" id="first_name" name="firstName" placeholder="Enter Your First Name" onChange={handleChange}/>
                {errors.firstName && <div className='alert alert-danger'>{errors.firstName}</div>}
              </div>
              <div className="input">
                <label htmlFor="middle_name">Middle Name</label>
                <input type="text" id="middle_name" placeholder="Enter Your Middle Name"/>
              </div>
              <div className="input">
                <label htmlFor="last_name">Last Name <span>*</span></label>
                <input type="text" id="last_name" name="lastName" placeholder="Enter Your Last Name" onChange={handleChange}/>
                {errors.lastName && <div className='alert alert-danger'>{errors.lastName}</div>}
              </div>
            </div>
            <div className="ssn_userName d-grid">
              <div className="input">
                <label htmlFor="SSN">Social Security Number (SSN)   <span>*</span></label>
                <input type="number" id="SSN" name="SSN" onChange={handleChange} placeholder="Enter Your Social Security Number "/>
                {errors.SSN && <div className='alert alert-danger'>{errors.SSN}</div>}
              </div>
              <div className="input">
                <label htmlFor="user_name">Username <span>*</span></label>
                <input type="text" id="user_name" name="userName" onChange={handleChange} placeholder="Enter Your User Name"/>
                {errors.userName && <div className='alert alert-danger'>{errors.userName}</div>}
              </div>
            </div>
            <div className="mob_data d-grid">
              <div className="input">
                <label htmlFor="mobile">Mobile Number  <span>*</span></label>
                <input type="number" name="mobile" id="mobile" onChange={handleChange} placeholder="Enter Your Mobile Number"/>
                {errors.mobile && <div className='alert alert-danger'>{errors.mobile}</div>}
              </div>
              <div className="input">
                <label htmlFor="data">Data Of Birth <span>*</span></label>
                <input type="date" name="data" onChange={handleChange} id="data"/>
                {errors.data && <div className='alert alert-danger'>{errors.data}</div>}
              </div>
            </div>
            <div className="inputs d-grid">
              <div className="input">
                <label htmlFor="Email">Email Address <span>*</span></label>
                <input type="email" name="email" onChange={handleChange} id="Email" placeholder="Enter Your Email Address"/>
                {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
              </div>
              <div className="input">
                <label htmlFor="gender">Gender <span>*</span></label>
                <select name="gender" id="gender" onChange={handleChange}>
                  <option selected disabled value="Enter Your Gender">Enter Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <div className='alert alert-danger'>{errors.gender}</div>}
              </div>
              <div className="input">
                <label htmlFor="marital_status">Marital Status <span>*</span></label>
                <select id="marital_status" name="marital_status" onChange={handleChange}>
                  <option selected disabled value="Enter Your Marital Status">Enter Your Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
                {errors.marital_status && <div className='alert alert-danger'>{errors.marital_status}</div>}
              </div>
            </div>
            <div className="password d-grid">
              <div className="input">
                <label htmlFor="password">Password  <span>*</span></label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handleChange}/>
                {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
              </div>
              <div className="input">
                <label htmlFor="cpassword">Confirm Password  <span>*</span></label>
                <input type="password" name="cPassword" id="cpassword" placeholder="Confirm Your Password" onChange={handleChange}/>
                {errors.cPassword && <div className='alert alert-danger'>{errors.cPassword}</div>}
              </div>
            </div>
              <InputSubmit>Register</InputSubmit>
          </form>
          <img src={Vector} className="vector_1" />
          <img src={Vector} className="vector_2" />
          <img src={Vector} className="vector_3" />
          <img src={Vector} className="vector_4" />

          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
          <div className="circle four"></div>
          <div className="circle five"></div>
          <div className="circle six"></div>
        </div>
      </section>
    </>
  );
};

export default Register;
