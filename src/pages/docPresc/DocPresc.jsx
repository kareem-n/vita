import './Prescriptions_2.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useEffect, useState } from 'react'
import DocName from '../DocName/DocName'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DocPresc = () => {
  const [data, setData] = useState(null);
  const [dataForDoctor, setDataForDoctor] = useState(null);


    const {name} = useParams() ;

  const { type, accessP } = useSelector(state => state.user);

  const nav = useNavigate();


  useEffect(() => {

    if( type === "doctor" && accessP ===false) {
      nav("/noPatient");
    }

    if (type === "patient") {
      axios.get("https://vitaapp.azurewebsites.net/patients/get-all-prescriptions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        const list = res.data.filter( doc =>  doc.doctorName === name )


        setData(list)
      }).catch(err => {
        console.log(err);
      })

    } else if (type === "doctor") {
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-all-prescriptions-sorted-by-Date?patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        
        const list = res.data.filter( doc =>  doc.doctorName === name )

        setDataForDoctor(list);
        console.log(0);
      }).catch(err => {
        console.log(err);
      })
    }



  }, [])


  return (
    <div className='prescriptions_2'>
      <RaysHead>
        <Link to={'/Prescriptions'} className='firstBtn'>Doctor</Link>
        <Link className='secondBtn'>List</Link>
      </RaysHead>
      <div className="content">
        <div className="heading d-flex align-items-center">
          <h2>Doctor</h2>
          <h2>Date</h2>
        </div>

        {
          data && data.map((item, key) =>
            <div key={key} className="">
              <DataPrescriptions_2 data={item} href="/ViewPrescription" />
            </div>
          )
        }

        {
          dataForDoctor && dataForDoctor.map((item, key) =>
            <div key={key} className="">
              <DataPrescriptions_2 data={item} href="/ViewPrescription" />
            </div>
          )
        }


      </div>
    </div>
  )
}
export default DocPresc