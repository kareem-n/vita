import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imageProfile from '../../assets/images/ImageProfile.png'
const Navbar = () => {
  return (
    <>
      <nav className='d-flex justify-content-between align-items-center'>
        <h2>Tests</h2>
        <div className="account">
          <div className="profile d-flex justify-content-between align-items-center">
            <div className="search">
              <FaSearch/>
            </div>
            <div className="info gap-3 d-flex justify-content-between align-items-center">
              <div className="image">
                <img src={imageProfile} className='rounded-circle' width={'50px'} height={'50px'}/>
              </div>
              <div className="name_mile">
                <h4 className='m-0'>Malvika N.</h4>
                <p className='m-0'>@malvi34</p>
              </div>
            </div>
            <div className="arrow">
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar