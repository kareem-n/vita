import { useDispatch, useSelector } from 'react-redux';
import User from '../../assets/images/User.png'
import './UserInfo.css'
import { useEffect } from 'react';
import { setUser } from '../../redux/slices/UserSlice';
const UserInfo = () => {


  const dispatch = useDispatch();


  const { userDet } = useSelector(state => state.user);



  useEffect(() => {

    if (localStorage.getItem("user")) {
      dispatch(setUser(localStorage.getItem("user")));
    }

  }, [])


  return (
    <div className='userInfo'>
      <div className="user d-flex justify-content-start gap-3">
        <div className="image">
          <img src={User} alt="" />
        </div>
        {
          userDet &&  <div className="info">
          <div>
            <strong>Name:</strong> <span>{userDet.fullName} </span>
          </div>
          <div>
            <strong>Date of birth:</strong> <span>{userDet.dateOfBirth}</span>
          </div>
          <div>
            <strong>Age:</strong> <span> {userDet.age}</span>
          </div>
          <div>
            <strong>Gender:</strong> <span>{userDet.gender} </span>
          </div>
          <div>
            <strong>Marital Status:</strong> <span>{userDet.martalStatus} </span>
          </div>
          <div>
            <strong>Mobile Number:</strong> <span>{userDet.phone} </span>
          </div>
          <div>
            <strong>Address:</strong> <span>{userDet.address}</span>
          </div>
        </div>
        }
       
      </div>
    </div>
  )
}

export default UserInfo