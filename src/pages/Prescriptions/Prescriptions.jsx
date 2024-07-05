import { useEffect, useState } from 'react'
import FolderInfo from '../../components/FolderInfo/FolderInfo'
import { RaysHead } from '../../components/Head/Head'
import './Prescriptions.css'
import axios from 'axios'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Prescriptions = () => {

  const [data, setData] = useState(null);
  const { type, accessP } = useSelector(state => state.user);

  const [dataForDoctor, setDataForDoctor] = useState(null);
  const nav = useNavigate();

  useEffect(() => {

    if (type === "doctor" && accessP === false) {
      nav("/noPatient");
    }

    if (type === "patient") {
      axios.get("https://vitaapp.azurewebsites.net/patients/get-all-prescriptions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {

        const uniqueDoctorNamesSet = new Set();

        // Filter the doctors array to remove duplicates based on the doctor name
        const uniqueDoctors = res.data.filter(doctor => {
          if (!uniqueDoctorNamesSet.has(doctor.doctorName)) {
            uniqueDoctorNamesSet.add(doctor.doctorName);
            return true;
          }
          return false;
        });

        setData(uniqueDoctors)
      }).catch(err => {
        console.log(err);
      })

    } else if (type === "doctor") {
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-all-prescriptions-sorted-by-Date?patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        // setDataForDoctor(res.data);
        const uniqueDoctorNamesSet = new Set();

        // Filter the doctors array to remove duplicates based on the doctor name
        const uniqueDoctors = res.data.filter(doctor => {
          if (!uniqueDoctorNamesSet.has(doctor.doctorName)) {
            uniqueDoctorNamesSet.add(doctor.doctorName);
            return true;
          }
          return false;
        });

        setDataForDoctor(uniqueDoctors)
      }).catch(err => {
        console.log(err);
      })
    }



  }, [])




  return (
    <div className='prescriptions'>
      <RaysHead>
        <FirstBtn>Doctor</FirstBtn>
        <SecondBtn href='/Prescriptions_2'>List</SecondBtn>
      </RaysHead>
      <div className="prescriptions_Info d-grid">

      {
          data && data.map((doc, key) => <FolderInfo key={key} href={`/docPresc/${doc.doctorName}`}>{doc.doctorName}</FolderInfo>
          )
        }
        {
          dataForDoctor && dataForDoctor.map((doc, key) => <FolderInfo key={key} href={`/docPresc/${doc.doctorName}`}>{doc.doctorName}</FolderInfo>
          )
        }
      </div>
    </div>
  )
}

export default Prescriptions