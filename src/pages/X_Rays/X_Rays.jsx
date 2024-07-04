import './X_Rays.css'
import { RaysHead } from '../../components/Head/Head'
import FolderInfo from '../../components/FolderInfo/FolderInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const X_Rays = () => {
  const { type, accessP } = useSelector(state => state.user);

  const nav = useNavigate();

  const [data, setData] = useState(null)
  const [loader, setLoader] = useState(false)

  useEffect(() => {


    if (type === "doctor" && accessP === false) {
      nav("/noPatient");
    }

    if (type === "patient") {
      setLoader(true)
      axios.get("https://vitaapp.azurewebsites.net/patients/get-list-of-XRays", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        setData(res.data)
        setLoader(false)
      }).catch(err => {
        setLoader(false)
      })
    } else if (type === "doctor") {
      setLoader(true)
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-list-of-XRays?patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        setData(res.data)
        setLoader(false)
      }).catch(err => {
        setLoader(false)
      })
    }



  }, [])



  return (
    <div className='x_rays'>
      <RaysHead />

      <div className="x_raysInfo d-grid">


        {
          loader ? <div className="w-100 d-flex justify-content-center align-items-center">
            <Bars />
          </div> : data ? data.map((item, key) => <FolderInfo namee={item.category} key={key} href={`/X_RaysName/${item.id}/${item.category}`} >{item.category}</FolderInfo>) : 'no data'
        }

        {/* <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo>
        <FolderInfo href="/X_RaysName">X_Rays</FolderInfo> */}
      </div>
    </div>
  )
}

export default X_Rays