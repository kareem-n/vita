import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imageProfile from '../../assets/images/ImageProfile.png'
import { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

import AddProfile from '../../Popus/AddProfile/AddProfile';
const Navbar = () => {

  const [dropShow, setSropShow] = useState(false);
  const [addProfileShow, setAddProfileShow] = useState(false);

  return (
    <>
      <nav className='d-flex justify-content-between align-items-center'>
        <h2>Tests</h2>
        <div className="account">
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
                  dropShow && <div className="position-absolute top-100 bg-dark mt-2 px-4 py-2 rounded-pill">
                    <div
                      onClick={() => setAddProfileShow(true)}
                      style={{
                        cursor: 'pointer'
                      }}
                      className='d-flex align-items-center'>
                      <IoMdAddCircle className='me-1' /> <p className='m-0 text-nowrap'>add profile</p>
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