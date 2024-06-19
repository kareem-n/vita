import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imageProfile from '../../assets/images/ImageProfile.png'
import { useEffect, useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

import AddProfile from '../../Popus/AddProfile/AddProfile';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../redux/slices/UserSlice';
const Navbar = () => {


  const dispatch = useDispatch();


  const { type } = useSelector(state => state.user);
  const [dropShow, setSropShow] = useState(false);
  const [addProfileShow, setAddProfileShow] = useState(false);

  const [profiles, setProfiles] = useState(null);


  function getA() {
    console.log(localStorage.getItem("user"));

    axios.get("https://blissful-gentleness-production.up.railway.app/users/auth/get-list-of-profiles",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      })
      .then(res => {
        console.log(res.data);
        setProfiles(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {

    getA();


  }, [])


  return (
    <>
      <nav className='d-flex justify-content-between align-items-center'>
        <h2>Tests</h2>
        <div
          style={{
            borderColor: type === 'doctor' ? 'yellow' : 'green'
          }}
          className="account">
          <div className="profile d-flex justify-content-between align-items-center">
            <div className="search">
              <FaSearch />
            </div>
            <div className="position-relative">
              <div className="info gap-3 d-flex justify-content-between align-items-center">
                <div className="image">
                  <img src={imageProfile} className='rounded-circle' width={'50px'} height={'50px'} />
                </div>
                <div className="name_mile">
                  <h4 className='m-0'>Malvika N.</h4>
                  <p className='m-0'>@malvi34</p>
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
                        {profiles.organizationDTOList.length > 0 && <div className="bg-danger">kareem</div>}
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