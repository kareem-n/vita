import './Profile.css'
import { useEffect, useRef, useState } from 'react';
import profile from '../../assets/images/User.png'
import edit from '../../assets/images/edit.png'
import { InputSubmit } from '../../components/Buttons/Buttons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Joi from 'joi';
import Loader from '../../components/loader/Loader';
import { Bars } from 'react-loader-spinner';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);



  const [orgStates, setorgStates] = useState(null);

  const tabTitles = ['personal details', 'Org 1'];

  const [modiData, setModiData] = useState(null);
  // const [success, setSuccess] = useState('');
  const [exErr, setExErr] = useState('');


  useEffect(() => {

    axios.get("https://vitaapp.azurewebsites.net/users/auth/get-list-of-profiles", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    })
      .then(res => {
        console.log(res.data.organizationDTOList
        );
        setorgStates(res.data.organizationDTOList)
      })



    axios.get("https://vitaapp.azurewebsites.net/users/auth/get-general-info-of-user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      // setModiData()
      console.log(res.data);
      setModiData(res.data);
    })

  }, [])

  const validateData = (data) => {
    const schema = Joi.object({
      age: Joi.any(),
      email: Joi.any(),
      ssn: Joi.any(),
      username: Joi.any(),

      fullName: Joi.string().required().messages({
        'string.empty': 'full Name is required.',
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
      gender: Joi.string().valid('Male', 'Female').required().label('Gender').messages({
        'any.only': 'Gender must be one of male or female',
        'string.empty': 'Gender is required.',
      }),
      martalStatus: Joi.string().valid('Single', 'Married').required().label('Marital Status').messages({
        'any.only': 'Marital Status must be one of single, married',
        'string.empty': 'Marital Status is required.',
      }),
      oldPassword: Joi.string(),
      newPassword: Joi.string().min(8).label('Password').messages({
        'string.empty': 'new password is required.',
        'string.min': 'Password must be at least 8 characters long.',
      }),
    });


    return schema.validate(data, { abortEarly: false });
  }



  const handleChange = (e) => {
    const { name, value } = e.target;

    setModiData({
      ...modiData,
      [name]: value
    });

  }

  const [errors, setErrors] = useState(null);

  const { user, image } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);


  const [orgCData, setorgCData] = useState(null);

  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };



  const [OrgSuccess, setOrgSuccess] = useState(false)

  const [orgImgC, setorgImgC] = useState(null)

  const handleTabClick = (index, name) => {
    setActiveTab(index);

    setorgCData(null)
    setorgImgC(null)
    setOrgSuccess(false)
    setImageOrg_1(null)
    axios.get(`https://vitaapp.azurewebsites.net/Organization/get-organization-data?organizationName=${name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      setorgCData(res.data)
    })


    axios.get(`https://vitaapp.azurewebsites.net/Organization/get-profile-picture?organizationName=${name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      },
      responseType: 'arraybuffer'
    }).then(res => {
      console.log(res.data);
      const img = convertArrayBufferToBase64(res.data)
      setorgImgC(`data:image/jpeg;base64,${img}`)
    })

  };

  const inputRef = useRef(null);
  const [imagePersonalDetails, setImagePersonalDetails] = useState("");
  const [imageOrg_1, setImageOrg_1] = useState("");

  const handleImageClickPersonalDetails = () => {
    inputRef.current.click()
  };

  const handleImageChangePersonalDetails = (e) => {
    const file = e.target.files[0];
    setImagePersonalDetails(file);
  };

  const handleImageClickOrg_1 = () => {
    inputRef.current.click()
  };

  const handleImageChangeOrg_1 = (e) => {
    const file = e.target.files[0];
    setImageOrg_1(e.target.files[0])

    console.log(e.target);

  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();


    if (imagePersonalDetails) {
      const formImg = new FormData;

      formImg.append("image", imagePersonalDetails);

      axios.post("https://vitaapp.azurewebsites.net/users/auth/add-profile-image", formImg, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }

    const validResult = validateData(modiData);
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

      axios.post("https://vitaapp.azurewebsites.net/users/auth/modify-data", validResult.value, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      })
        .then(res => {
          setLoader(false);
          setErrors(null);

          console.log(res.data);
          // window.location.reload() ;
          // localStorage.setItem("user", res.data.token);
          // navigate("/login");
        }).catch(err => {
          setLoader(false);
          setExErr(err.response.data ? err.response.data : 'something went wrong!')
          console.log(err.response);
        })

    }


  }


  const [orgEdit, setorgEdit] = useState({
    organizationName: "",
    phone: "",
    location: "",
    email: ""
  })

  const handleOrgChange = (e) => {
    const { name, value } = e.target



    setorgCData(
      { ...orgCData, [name]: value }
    )

  }


  const [serverErr, setServerErr] = useState(null);

  const handleOrgSubmit = (e) => {

    e.preventDefault();


    console.log(imageOrg_1);



    if (imageOrg_1) {

      const formD = new FormData;


      formD.append("image", imageOrg_1);

      axios.post(`https://vitaapp.azurewebsites.net/Organization/add-profile-picture?organizationName=${orgCData.organizationName}`,
        formD, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }
      ).then(res => {
        console.log(res.data);
        setOrgSuccess(res.data)
      }).catch(err => {
        console.log(err.response);
      })
    }




    axios.post(`https://vitaapp.azurewebsites.net/Organization/edit-profile-data`, orgCData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      console.log(res.data);
      setOrgSuccess(res.data)

    }).catch(err => {
      setServerErr(err.response)
    })


  }


  return (
    <>
      <div className='Profile'>
        {
          loader && <Loader />
        }

        {
          orgStates && <>
            <div className="tab-buttons">
              {[0, ...orgStates].map((item, index) => (
                <button
                  key={index}
                  className={index === activeTab ? 'active' : ''}
                  onClick={() => handleTabClick(index, item.organizationName)}
                >
                  <span>{index === 0 && 'personal info'}</span>
                  <span>
                    {
                      item.organizationName
                    }
                  </span>
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === 0 && modiData &&
                <form onSubmit={handlePersonalSubmit}>
                  {
                    exErr && <div className="alert alert-danger">
                      {exErr}
                    </div>
                  }
                  <div className="personal_details">

                    <div className="inputImage" onClick={handleImageClickPersonalDetails}>
                      {imagePersonalDetails ? (
                        <img src={URL.createObjectURL(imagePersonalDetails)} width="180px" />
                      ) : (
                        <img src={image && image} alt="" />
                      )}
                      <input type="file" ref={inputRef} onChange={handleImageChangePersonalDetails} style={{ display: 'none' }} />
                      <img src={edit} className="edit" />
                    </div>
                    <div className="formInputs">
                      <div className="inputs_name d-grid">

                        <div className="input">
                          <label htmlFor="fullName">Full Name <span>*</span></label>
                          <input value={modiData.fullName} type="text" id="fullName" onChange={handleChange} name="fullName" placeholder="Enter Your Full Name" />
                          {
                            errors?.fullName && <div className="badge text-danger">
                              {errors?.fullName}
                            </div>
                          }
                          {/* {errors.firstName && <div className='alert alert-danger'>{errors.firstName}</div>} */}
                        </div>

                        <div className="input">
                          <label htmlFor="phone">phone Number  <span>*</span></label>
                          <input value={modiData.phone} type="number" name="phone" id="phone" onChange={handleChange} placeholder="Enter Your Mobile Number" />
                          {
                            errors?.phone && <div className="badge text-danger">
                              {errors?.phone}
                            </div>
                          }
                          {/* {errors.mobile && <div className='alert alert-danger'>{errors.mobile}</div>} */}
                        </div>

                        <div className="input">
                          <label htmlFor="data">Data Of Birth <span>*</span></label>
                          <input value={modiData.dateOfBirth} type="date" name="dateOfBirth" onChange={handleChange} id="data" />
                          {
                            errors?.dateOfBirth && <div className="badge text-danger">
                              {errors?.dateOfBirth}
                            </div>
                          }
                          {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                        </div>
                      </div>

                      <div className="inputs d-grid">

                        <div className="input">
                          <label htmlFor="gender">Gender <span>*</span></label>
                          <select value={modiData.gender} name="gender" id="gender" onChange={handleChange}>
                            <option disabled defaultValue="Enter Your Gender">Enter Your Gender</option>
                            {/* <option value="Enter Your Gender" disabled>Enter Your Gender</option> */}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          {
                            errors?.gender && <div className="badge text-danger">
                              {errors?.gender}
                            </div>
                          }
                          {/* {errors.gender && <div className='alert alert-danger'>{errors.gender}</div>} */}
                        </div>

                        <div className="input">
                          <label htmlFor="marital_status">Marital Status <span>*</span></label>
                          <select value={modiData.martalStatus} id="marital_status" name="martalStatus" onChange={handleChange}>
                            <option disabled defaultValue="Enter Your Marital Status">Enter Your Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                          </select>
                          {
                            errors?.martalStatus && <div className="badge text-danger">
                              {errors?.martalStatus}
                            </div>
                          }
                          {/* {errors.marital_status && <div className='alert alert-danger'>{errors.marital_status}</div>} */}
                        </div>
                      </div>
                      <div className="address_currentPassword d-grid">
                        <div className="input">
                          <label htmlFor="address">Adderss</label>
                          <input value={modiData.address} type="text" name="address" id="address" onChange={handleChange} placeholder="Enter Your Adderss" />
                          {
                            errors?.address && <div className="badge text-danger">
                              {errors?.address}
                            </div>
                          }
                          {/* {errors.mobile && <div className='alert alert-danger'>{errors.mobile}</div>} */}
                        </div>
                        <div className="input">
                          <label htmlFor="CurrentPassword">Current Password <span>*</span></label>
                          <input type="password" name="oldPassword" onChange={handleChange} id="currentPassword" placeholder='Current Password' />

                          {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                        </div>
                      </div>
                      <div className="Bio_NPassword_CPassword d-grid">

                        <div className="pass">
                          <div className="input">
                            <label htmlFor="NPassword">New Password <span>*</span></label>
                            <input type="password" name="newPassword" onChange={handleChange} id="NPassword" placeholder='New Password' />
                            {
                              errors?.newPassword && <div className="badge text-danger">
                                {errors?.newPassword}
                              </div>
                            }
                            {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">

                    <InputSubmit>Save</InputSubmit>
                  </div>
                </form>
              }

              {(activeTab >= 1 && orgCData) &&


                <form onSubmit={handleOrgSubmit} className="org_1">
                  {/* 
                  
                    success msg on org update
                  
                  */}
                  {
                    OrgSuccess &&
                    <div className="">{OrgSuccess}</div>
                  }
                  <div className="inputImage" onClick={handleImageClickOrg_1}>
                    {imageOrg_1 ? (
                      <img src={URL.createObjectURL(imageOrg_1)} width="180px" />
                    ) : (
                      <img src={orgImgC ? orgImgC : profile} alt="" />
                    )}
                    <input type="file" ref={inputRef} onChange={handleImageChangeOrg_1} style={{ display: 'none' }} />
                    <img src={edit} className="edit" />

                  </div>

                  <div className="formInputs">
                    <div className="inputs">

                      <div className="input">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input onChange={(e) => {
                          handleOrgChange(e)
                        }} type="number" defaultValue={orgCData?.phone} name="phone" id="mobile" placeholder="Enter Your Mobile Number" />
                      </div>
                      <div className="input">
                        <label htmlFor="Email">Location</label>
                        <input onChange={(e) => {
                          handleOrgChange(e)
                        }} type="text" defaultValue={orgCData?.location} name="location" id="location" placeholder="Enter Your location Address" />
                      </div>
                      <div className="input">
                        <label htmlFor="Email">Email Address</label>
                        <input onChange={(e) => {
                          handleOrgChange(e)
                        }} type="email" defaultValue={orgCData?.email} name="email" id="Email" placeholder="Enter Your Email Address" />
                      </div>



                    </div>
                  </div>
                  <InputSubmit>Save</InputSubmit>
                </form>
              }
              {/* {activeTab === 2 && <div>Content for Tab 3</div>} */}
            </div>
          </>
        }

      </div>
    </>
  )
}

export default Profile

// import React, { useState } from 'react';
// import './Tabs.css'; // استيراد ملف الستايل

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabTitles = ['First Tab', 'Second Tab', 'Third Tab'];

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div>
//       <div className="tab-buttons">
//         {[0, 1, 2].map((index) => (
//           <button
//             key={index}
//             className={index === activeTab ? 'active' : ''}
//             onClick={() => handleTabClick(index)}
//           >
//             {tabTitles[index]} {/* استخدام العناوين المحددة لكل تاب */}
//           </button>
//         ))}
//       </div>
//       <div className="tab-content">
//         {activeTab === 0 && <div>Content for First Tab</div>}
//         {activeTab === 1 && <div>Content for Second Tab</div>}
//         {activeTab === 2 && <div>Content for Third Tab</div>}
//       </div>
//     </div>
//   );
// };

// export default Tabs;
