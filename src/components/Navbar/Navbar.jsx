import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imageProfile from '../../assets/images/ImageProfile.png'
import { useEffect, useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

import AddProfile from '../../Popus/AddProfile/AddProfile';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProfile, setType } from '../../redux/slices/UserSlice';
import Search from '../search/Search';
import { FaXmark } from 'react-icons/fa6';
const Navbar = () => {


  const dispatch = useDispatch();


  const { type, user, userDet, image } = useSelector(state => state.user);

  const [dropShow, setSropShow] = useState(false);
  const [addProfileShow, setAddProfileShow] = useState(false);

  const [profiles, setProfiles] = useState(null);


  function getA() {

    axios.get("https://vita-production.up.railway.app/users/auth/get-list-of-profiles",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      })
      .then(res => {
        setProfiles(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {

    getA();


  }, [user]);

  const [searchPop, setSearchPop] = useState(false)


  return (
    <>
      <nav className='d-flex justify-content-between align-items-center'>
        <h2>Tests</h2>
        {/* search com */}
        {
          searchPop && <div className="d-flex position-relative">
            <Search />
          </div>
        }
        <div
          style={{
            borderColor: type === 'doctor' ? 'yellow' : type === "patient" ? 'green' : 'orange'
          }}
          className="account">
          <div className="profile d-flex justify-content-between align-items-center">

            <div onClick={() => {
              setSearchPop(!searchPop);
            }} className="search">

              {
                searchPop ? <FaXmark /> : <FaSearch />
              }


            </div>
            <div className="position-relative">
              <div className="info gap-3 d-flex justify-content-between align-items-center">
                <div className="image">
                  <img src={image && image} className='rounded-circle' width={'50px'} height={'50px'} />
                </div>
                <div className="name_mile">
                  <h4 className='m-0' style={{ fontSize:'13px' }}>{userDet ? userDet.fullName : ''}</h4>
                  <p className='m-0'>@{userDet ? userDet.username : ''}</p>
                </div>
                {
                  dropShow && <div className="position-absolute top-100 bg-dark mt-2 px-4 py-2 rounded-4">

                    {
                      profiles && <div className="">
                        {profiles.doctor && <div
                          onClick={() => {
                            dispatch(setType("doctor"));
                            setSropShow(false);
                          }}
                          style={{
                            cursor: 'pointer'
                          }}
                          className="text-warning fw-bold text-nowrap border-4 p-1">
                          <img src={imageProfile} style={{
                            width: "40px",
                            height: '40px',
                            border: '4px solid yellow'
                          }} className='rounded-circle object-fit-cover me-2' alt="" />
                          Doctor
                        </div>}

                        {profiles.patient && <div
                          onClick={() => {
                            dispatch(setType("patient"));
                            setSropShow(false);

                          }}
                          style={{
                            cursor: 'pointer'
                          }}
                          className="text-success fw-bold text-nowrap border-4 p-1">
                          <img src={imageProfile} style={{
                            width: "40px",
                            height: '40px',
                            border: '4px solid green'
                          }} className='rounded-circle object-fit-cover me-2' alt="" />
                          Patient
                        </div>}


                        {profiles.organizationDTOList.length > 0 &&
                          profiles.organizationDTOList.map((item, key) => <div
                            key={key}
                            onClick={() => {
                              dispatch(setType(item.type));
                              dispatch(setCurrentProfile(item.organizationName));
                              setSropShow(false);
                            }}
                            style={{
                              cursor: 'pointer',
                              color: 'orange'

                            }}
                            className="fw-bold text-nowrap border-4 p-1">
                            <img src={imageProfile} style={{
                              width: "40px",
                              height: '40px',
                              border: '4px solid orange'
                            }} className='rounded-circle object-fit-cover me-2' alt="" />
                            {item.organizationName
                            }
                          </div>)
                        }
                      </div>
                    }
                    <div
                      onClick={() => setAddProfileShow(true)}
                      style={{
                        cursor: 'pointer'
                      }}
                      className='d-flex align-items-center border-top'>

                      <IoMdAddCircle className='me-1' /> <p className='m-0 text-nowrap py-2'>add profile</p>
                    </div>

                  </div>
                }
              </div>
            </div>

            <div onClick={() => setSropShow(!dropShow)} className="arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </nav>

      {
        addProfileShow && <div className="">
          <AddProfile setAddProfileShow={setAddProfileShow} />
        </div>
      }


    </>
  )
}

export default Navbar