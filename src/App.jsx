import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verify from './pages/Verify/Verify'
import Waiting_list from './components/Waiting_list/Waiting_list'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Charts from './components/Charts/Charts'
import NoPatient from './components/NoPatient/NoPatient'
import AccessPatient from './Popus/AccessPatient/AccessPatient'
import PatientAccess from './Popus/PatientAccess/PatientAccess'
import UserInfo from './components/UserInfo/UserInfo'
import X_Rays from './pages/X_Rays/X_Rays'
import Prescriptions from './pages/Prescriptions/Prescriptions'
import Prescriptions_2 from './pages/Prescriptions_2/Prescriptions_2'
import AddPrescription from './pages/AddPrescription/AddPrescription'
import ViewPrescription from './pages/ViewPrescription/ViewPrescription'
import Profile from './pages/Profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentProfile, setType, setUser, setUserDet, setUserImage } from './redux/slices/UserSlice'
import axios from 'axios'
import DocName from './pages/DocName/DocName'
import TestLapOptions from './Popus/TestLapOptions/TestLapOptions'
import XRaysLapOptions from './Popus/XRaysLapOptions/XRaysLapOptions'
import PharmacyOptions from './Popus/PharmacyOptions/PharmacyOptions'
import X_RaysName from './pages/X_RaysName/X_RaysName'
import Posters from './pages/Posters/Posters'
import QRCodee from './Popus/QRCode/QRCode'
import Dashboard from './pages/Dashboard/Dashboard'
import UploadTests from './pages/UploadTests/UploadTests'
import DocPresc from './pages/docPresc/DocPresc'


function App() {

  const nav = useNavigate();

  const { user, type } = useSelector((state) => state.user);


  const dispatch = useDispatch();


  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {



    axios.get("https://vitaapp.azurewebsites.net/users/auth/get-profile-image", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      responseType: 'arraybuffer',
    }).then(data => {

      const base64 = convertArrayBufferToBase64(data.data);
      const image = `data:image/jpeg;base64,${base64}`;
      dispatch(setUserImage(image));
    })

    axios.get("https://vitaapp.azurewebsites.net/users/auth/get-general-info-of-user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(data => {
      dispatch(setUserDet(data.data));
      // navigate('/userInfo')
    })


    if (localStorage.getItem("user")) {
      dispatch(setUser(localStorage.getItem("user")));
      dispatch(setCurrentProfile(localStorage.getItem("current")));
    }

    if (localStorage.getItem("userP")) {
      dispatch(setType(localStorage.getItem("userP")))
    }

    console.log(type);


  }, [])

  useEffect(() => {

    // if (type === "doctor") {
    //   nav("/noPatient");

    // } else if (type === "patient") {
    //   nav("/userInfo")
    // }

  }, [type])


  const ProtectRoute = ({ children }) => {

    if (localStorage.getItem("user")) {
      return children;
    } else {
      return <Navigate to={'/login'} />
    }
  }


  const ProtectDoctor = ({ children }) => {

    if (type === "doctor") {
      return children
    } else {
      return <Navigate to={'/'} />;
    }

  }


  const HomeAccess = ({ children }) => {


    if (localStorage.getItem("user")) {
      return <Navigate to={'/Posters'} />;
    }

  }



  return (
    <>

      {
        user ? <>
          <Navbar />
          <Sidebar />
        </> : ''
      }

      <Routes>
        <Route path="/" element={<HomeAccess><Home /></HomeAccess>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/waiting_list" element={<Waiting_list />} />


        <Route path="/NoPatient" element={<NoPatient />} />

        {/* <Route path="/patientAccess" element={<PatientAccess />} /> */}

        <Route path="/userInfo" element={<ProtectRoute >
          <UserInfo />
        </ProtectRoute>} />


        <Route path="/QRCode" element={<QRCodee />} />
        <Route path="/X_Rays" element={<X_Rays />} />
        <Route path="/Prescriptions" element={<Prescriptions />} />
        <Route path="/Prescriptions_2" element={<Prescriptions_2 />} />
        <Route path="/docPresc/:name" element={<DocPresc />} />
        <Route path="/AddPrescription" element={<AddPrescription />} />
        <Route path="/ViewPrescription/:id" element={<ViewPrescription />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DocName" element={<DocName />} />
        <Route path="/TestLapOptions" element={<TestLapOptions />} />
        <Route path="/XRaysLapOptions" element={<XRaysLapOptions />} />
        <Route path="/PharmacyOptions" element={<PharmacyOptions />} />
        <Route path="/X_RaysName/:id/:name" element={<X_RaysName />} />
        <Route path="/Posters" element={<Posters />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UploadTests" element={<UploadTests />} />
      </Routes>


    </>
  )
}

export default App