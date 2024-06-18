import "./Register.css";
import Vector from "../../assets/images/Vector.png";
import { InputSubmit } from "../../components/Buttons/Buttons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import Loader from './../../components/loader/Loader';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate()

  const [loader, setLoader] = useState(false);
  const [exErr, setExErr] = useState(null);

  const [formData, setFormData] = useState({
    profilePicture: "1",
    ssn: '',
    username: "",
    fullName: '',
    phone: "",
    dateOfBirth: '',
    address: "",
    email: '',
    gender: '',
    martalStatus: '',
    password: '',
  });

  const [errors, setErrors] = useState(null);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0].name : value
    })

  }


  const validateData = (data) => {
    const schema = Joi.object({
      fullName: Joi.string().required().label('Last Name').messages({
        'string.empty': 'full Name is required.',
      }),
      ssn: Joi.string().pattern(/^\d+$/).required().label('snn').messages({
        'string.pattern.base': 'SSN must only contain digits.',
        'string.empty': 'SSN is required.',
      }),
      username: Joi.string().required().label('username').messages({
        'string.empty': 'Username is required.',
      }),
      address: Joi.string().required().label('username').messages({
        'string.empty': 'address is required.',
      }),
      phone: Joi.string().pattern(/^0\d+$/).length(11).required().label('phone').messages({
        'string.length': 'Mobile number must be exactly 10 digits.',
        'string.pattern.base': 'Mobile number must only contain digits.',
        'string.empty': 'Mobile number is required.',
      }),
      dateOfBirth: Joi.date().required().label('Date of Birth').messages({
        'date.base': 'Invalid date format.',
        'date.empty': 'Date of Birth is required.',
      }),
      email: Joi.string().email({ tlds: { allow: false } }).required().label('Email').messages({
        'string.email': 'Email must be a valid email address.',
        'string.empty': 'Email is required.',
      }),
      profilePicture: Joi.any().label('Profile Picture'),
      gender: Joi.string().valid('Male', 'Female').required().label('Gender').messages({
        'any.only': 'Gender must be one of male or female',
        'string.empty': 'Gender is required.',
      }),
      martalStatus: Joi.string().valid('Single', 'Married').required().label('Marital Status').messages({
        'any.only': 'Marital Status must be one of single, married',
        'string.empty': 'Marital Status is required.',
      }),
      password: Joi.string().min(4).required().label('Password').messages({
        'string.empty': 'Password is required.',
        'string.min': 'Password must be at least 4 characters long.',
      }),
    });


    return schema.validate(data, { abortEarly: false });
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const validResult = validateData(formData);
    const errorData = {};

    if (validResult.error) {
      for (let item of validResult.error.details) {
        if (!errorData[item.path[0]]) {
          errorData[item.path[0]] = item.message;
        }
      }
    }



    if (Object.keys(errorData).length) {
      setErrors(errorData);
      console.log(errorData);
      // console.log(errorData);
    } else {
      setLoader(true);


      console.log(validResult.value);
      // console.log(formDataToSend.values());

      axios.post("https://blissful-gentleness-production.up.railway.app/register", validResult.value)
        .then(res => {
          setLoader(false);
          console.log(res);
          localStorage.setItem("user", res.data.token);

          navigate("/");

        }).catch(err => {
          setLoader(false);
          setExErr(err.response.data ? err.response.data : 'something went wrong!')
          console.log(err.response);
        })

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

          

          <form onSubmit={handleSubmit}>

          {
            exErr && <div className="alert alert-danger">
              {
                exErr
              }
            </div>
          }
            <p>Personal Information</p>
            <div className="inputs_name d-grid">
              <div className="input ">
                <label htmlFor="username">User Name <span>*</span></label>
                <input type="text" id="username" name="username" placeholder="Enter user name" onChange={handleChange} />

                {
                  errors?.username && <div className="badge text-danger">
                    {errors?.username}
                  </div>
                }

              </div>

              <div className="input">
                <label htmlFor="fullName">Full Name <span>*</span></label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter Your full Name" onChange={handleChange} />

                {
                  errors?.fullName && <div className="badge text-danger">
                    {errors?.fullName}
                  </div>
                }

              </div>
              <div className="input">
                <label htmlFor="profilePicture">profile image</label>
                <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} />
                {
                  errors?.profilePicture && <div className="badge text-danger">
                    {errors?.profilePicture}
                  </div>
                }

              </div>
            </div>
            <div className="ssn_userName d-grid">
              <div className="input">
                <label htmlFor="ssn">Social Security Number(SSN)  <span>*</span></label>
                <input type="text" id="ssn" name="ssn" onChange={handleChange} placeholder="Enter Your Social Security Number " />

                {
                  errors?.snn && <div className="badge text-danger">
                    {errors?.snn}
                  </div>
                }
              </div>
              <div className="input">
                <label htmlFor="address">Address  <span>*</span></label>
                <input type="text" id="address" name="address" onChange={handleChange} placeholder="Enter Your Address" />

                {
                  errors?.address && <div className="badge text-danger">
                    {errors?.address}
                  </div>
                }
              </div>
            </div>
            <div className="mob_data d-grid">
              <div className="input">
                <label htmlFor="phone">phone Number  <span>*</span></label>
                <input type="number" name="phone" id="phone" onChange={handleChange} placeholder="Enter Your phone Number" />

                {
                  errors?.phone && <div className="badge text-danger">
                    {errors?.phone}
                  </div>
                }
              </div>
              <div className="input">
                <label htmlFor="data">Data Of Birth <span>*</span></label>
                <input type="date" name="dateOfBirth" onChange={handleChange} id="data" />

                {
                  errors?.dateOfBirth && <div className="badge text-danger">
                    {errors?.dateOfBirth}
                  </div>
                }
              </div>
            </div>
            <div className="inputs d-grid">
              <div className="input">
                <label htmlFor="Email">Email Address <span>*</span></label>
                <input type="email" name="email" onChange={handleChange} id="Email" placeholder="Enter Your Email Address" />
                {
                  errors?.email && <div className="badge text-danger">
                    {errors?.email}
                  </div>
                }
              </div>
              <div className="input">
                <label htmlFor="gender">Gender <span>*</span></label>
                <select name="gender" id="gender" onChange={handleChange}>
                  <option selected disabled value="Enter Your Gender">Enter Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                {
                  errors?.gender && <div className="badge text-danger">
                    {errors?.gender}
                  </div>
                }
              </div>
              <div className="input">
                <label htmlFor="martalStatus">Marital Status <span>*</span></label>
                <select id="martalStatus" name="martalStatus" onChange={handleChange}>
                  <option selected disabled value="Enter Your Marital Status">Enter Your Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
                {
                  errors?.martalStatus && <div className="badge text-danger">
                    {errors?.martalStatus}
                  </div>
                }
              </div>
            </div>
            <div className="password d-grid">
              <div className="input">
                <label htmlFor="password">Password  <span>*</span></label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handleChange} />
                {
                  errors?.password && <div className="badge text-danger">
                    {errors?.password}
                  </div>
                }
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
        {
          loader && <Loader />
        }
      </section>
    </>
  );
};

export default Register;
