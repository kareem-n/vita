import { useDispatch, useSelector } from 'react-redux';
import User from '../../assets/images/User.png'
import './UserInfo.css'
import { useEffect, useState } from 'react';
import { setUser, setUserDet } from '../../redux/slices/UserSlice';
import axios from 'axios';
const UserInfo = () => {


  const dispatch = useDispatch();


  const { userDet, accessP } = useSelector(state => state.user);


  const [patient, setPatient] = useState(null);


  useEffect(() => {
    if (accessP) {
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-my-patient?patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setPatient(res.data)
      })

    }
  }, [accessP])


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
          patient ? <div className="info">
            <div>
              <strong>Name:</strong> <span>{patient.fullName} </span>
            </div>
            <div>
              <strong>Date of birth:</strong> <span>{patient.dateOfBirth}</span>
            </div>
            <div>
              <strong>Age:</strong> <span> {patient.age}</span>
            </div>
            <div>
              <strong>Gender:</strong> <span>{patient.gender} </span>
            </div>
            <div>
              <strong>Marital Status:</strong> <span>{patient.martalStatus} </span>
            </div>
            <div>
              <strong>Mobile Number:</strong> <span>{patient.phone} </span>
            </div>
            <div>
              <strong>Address:</strong> <span>{patient.address}</span>
            </div>
          </div> : userDet && <div className="info">
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