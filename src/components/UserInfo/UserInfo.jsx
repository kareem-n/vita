import User from '../../assets/images/User.png'
import './UserInfo.css'
const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className="user d-flex justify-content-start gap-3">
        <div className="image">
          <img src={User} alt="" />
        </div>
        <div className="info">
          <div>
            <strong>Name:</strong> <span>Galal Elaasar </span>
          </div>
          <div>
            <strong>Date of birth:</strong> <span>1/5/2002</span>
          </div>
          <div>
            <strong>Age:</strong> <span> 32</span>
          </div>
          <div>
            <strong>Gender:</strong> <span>Male </span>
          </div>
          <div>
            <strong>Marital Status:</strong> <span>Single </span>
          </div>
          <div>
            <strong>Mobile Number:</strong> <span>01099909451 </span>
          </div>
          <div>
            <strong>Address:</strong> <span>Address</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo