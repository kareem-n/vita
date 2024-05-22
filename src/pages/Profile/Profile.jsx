import './Profile.css'
import { useRef, useState } from 'react';
import profile from '../../assets/images/User.png'
import edit from '../../assets/images/edit.png'
import { InputSubmit } from '../../components/Buttons/Buttons';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabTitles = ['personal details', 'Org 1', 'Org 2'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const inputRef = useRef(null);
  const [imagePersonalDetails, setImagePersonalDetails] = useState("");
  const [imageOrg_1, setImageOrg_1] = useState("");

  const handleImageClickPersonalDetails = () => {
    inputRef.current.click()
  };

  const handleImageChangePersonalDetails = (e) => {
    const file = e.target.files[0];
    setImagePersonalDetails(e.target.files[0])
  };

  const handleImageClickOrg_1 = () => {
    inputRef.current.click()
  };

  const handleImageChangeOrg_1 = (e) => {
    const file = e.target.files[0];
    setImageOrg_1(e.target.files[0])
  };

  return (
    <>
      <div className='Profile'>
        <div className="tab-buttons">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(index)}
            >
              <span>{tabTitles[index]}</span>
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === 0 && 
              <form action='' className="personal_details">
                <div className="inputImage" onClick={handleImageClickPersonalDetails}>
                  {imagePersonalDetails ? (
                      <img src={URL.createObjectURL(imagePersonalDetails)} width="180px" />
                    ):(
                  <img src={profile} alt="" />
                  )}
                  <input type="file" ref={inputRef} onChange={handleImageChangePersonalDetails} style={{display:'none'}}/>
                  <img src={edit} className="edit" />
                </div>
                <div className="formInputs">
                  <div className="inputs_name d-grid">
                    <div className="input">
                      <label htmlFor="first_name">First Name <span>*</span></label>
                      <input type="text" id="first_name" /*onChange={handleChange}*/ name="firstName" placeholder="Enter Your First Name"/>
                      {/* {errors.firstName && <div className='alert alert-danger'>{errors.firstName}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="middle_name">Middle Name</label>
                      <input type="text" id="middle_name" placeholder="Enter Your Middle Name"/>
                    </div>
                    <div className="input">
                      <label htmlFor="last_name">Last Name <span>*</span></label>
                      <input type="text" id="last_name" /*onChange={handleChange}*/ name="lastName" placeholder="Enter Your Last Name"/>
                      {/* {errors.lastName && <div className='alert alert-danger'>{errors.lastName}</div>} */}
                    </div>
                  </div>
                  <div className="ssn_userName d-grid">
                    <div className="input">
                      <label htmlFor="SSN">Social Security Number (SSN)   <span>*</span></label>
                      <input type="number" id="SSN" name="SSN" /*onChange={handleChange}*/ placeholder="Enter Your Social Security Number "/>
                      {/* {errors.SSN && <div className='alert alert-danger'>{errors.SSN}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="user_name">Username <span>*</span></label>
                      <input type="text" id="user_name" /*onChange={handleChange}*/ name="userName" placeholder="Enter Your User Name"/>
                      {/* {errors.userName && <div className='alert alert-danger'>{errors.userName}</div>} */}
                    </div>
                  </div>
                  <div className="mob_data d-grid">
                    <div className="input">
                      <label htmlFor="mobile">Mobile Number  <span>*</span></label>
                      <input type="number" name="mobile" id="mobile" /*onChange={handleChange}*/ placeholder="Enter Your Mobile Number"/>
                      {/* {errors.mobile && <div className='alert alert-danger'>{errors.mobile}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="data">Data Of Birth <span>*</span></label>
                      <input type="date" name="data" /*onChange={handleChange}*/ id="data"/>
                      {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                    </div>
                  </div>
                  <div className="inputs d-grid">
                    <div className="input">
                      <label htmlFor="Email">Email Address <span>*</span></label>
                      <input type="email" name="email" /*onChange={handleChange}*/ id="Email" placeholder="Enter Your Email Address"/>
                      {/* {errors.email && <div className='alert alert-danger'>{errors.email}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="gender">Gender <span>*</span></label>
                      <select name="gender" id="gender" /*onChange={handleChange}*/>
                        <option disabled defaultValue="Enter Your Gender">Enter Your Gender</option>
                        {/* <option value="Enter Your Gender" disabled>Enter Your Gender</option> */}
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {/* {errors.gender && <div className='alert alert-danger'>{errors.gender}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="marital_status">Marital Status <span>*</span></label>
                      <select id="marital_status" name="marital_status" /*onChange={handleChange}*/>
                        <option disabled defaultValue="Enter Your Marital Status">Enter Your Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                      </select>
                      {/* {errors.marital_status && <div className='alert alert-danger'>{errors.marital_status}</div>} */}
                    </div>
                  </div>
                  <div className="address_currentPassword d-grid">
                    <div className="input">
                      <label htmlFor="address">Adderss</label>
                      <input type="number" name="mobile" id="address" /*onChange={handleChange}*/ placeholder="Enter Your Adderss"/>
                      {/* {errors.mobile && <div className='alert alert-danger'>{errors.mobile}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="CurrentPassword">Current Password <span>*</span></label>
                      <input type="password" name="CurrentPassword" /*onChange={handleChange}*/ id="currentPassword" placeholder='Current Password'/>
                      {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                    </div>
                  </div>
                  <div className="Bio_NPassword_CPassword d-grid">
                    <div className="textarea">
                      <label htmlFor="Bio">Bio</label>
                      <textarea name="Bio" id="Bio" cols="30" rows="10" placeholder='Bio'></textarea>
                    </div>
                    <div className="pass">
                      <div className="input">
                        <label htmlFor="NPassword">New Password <span>*</span></label>
                        <input type="password" name="NPassword" /*onChange={handleChange}*/ id="NPassword" placeholder='New Password'/>
                        {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                      </div>
                      <div className="input">
                        <label htmlFor="CPassword">Confirm Password <span>*</span></label>
                        <input type="password" name="CPassword" /*onChange={handleChange}*/ id="CPassword" placeholder='Confirm Password'/>
                        {/* {errors.data && <div className='alert alert-danger'>{errors.data}</div>} */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <InputSubmit>Save</InputSubmit> */}
              </form>
            }
          {activeTab === 1 && 
            <form action='' className="org_1">
              <div className="inputImage" onClick={handleImageClickOrg_1}>
                {imageOrg_1 ? (
                    <img src={URL.createObjectURL(imageOrg_1)} width="180px" />
                  ):(
                <img src={profile} alt="" />
                )}
                <input type="file" ref={inputRef} onChange={handleImageChangeOrg_1} style={{display:'none'}}/>
                <img src={edit} className="edit" />

              </div>
              <div className="formInputs">
                <div className="inputs">
                  <div className="input">
                    <label htmlFor="Organization_Name">Organization Name <span>*</span></label>
                    <input type="text" id="Organization_Name" /*onChange={handleChange}*/ name="OrganizationName" placeholder="Organization_Name"/>
                    {/* {errors.firstName && <div className='alert alert-danger'>{errors.firstName}</div>} */}
                  </div>
                  <div className="input">
                      <label htmlFor="user_name">Username <span>*</span></label>
                      <input type="text" id="user_name" /*onChange={handleChange}*/ name="userName" placeholder="Enter Your User Name"/>
                      {/* {errors.userName && <div className='alert alert-danger'>{errors.userName}</div>} */}
                    </div>
                    <div className="input">
                      <label htmlFor="mobile">Mobile Number</label>
                      <input type="number" name="mobile" id="mobile" placeholder="Enter Your Mobile Number"/>
                    </div>
                    <div className="input">
                      <label htmlFor="Email">Email Address</label>
                      <input type="email" name="email" id="Email" placeholder="Enter Your Email Address"/>
                    </div>
                    <div className="textarea">
                      <label htmlFor="Bio">Bio</label>
                      <textarea name="Bio" id="Bio" cols="30" rows="10" placeholder='Bio'></textarea>
                    </div>
                </div>
              </div>
              {/* <InputSubmit>Save</InputSubmit> */}
            </form>
          }
          {activeTab === 2 && <div>Content for Tab 3</div>}
        </div>
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
