import './Prescriptions_2.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useEffect, useState } from 'react'
import DocName from '../DocName/DocName'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Prescriptions_2 = () => {
  const [data, setData] = useState(null);
  const [dataForDoctor, setDataForDoctor] = useState(null);

  const { type, accessP } = useSelector(state => state.user);



  useEffect(() => {

    if (type === "patient") {
      axios.get("https://vita-production.up.railway.app/patients/get-all-prescriptions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err);
      })

    } else {
      axios.get(`https://vita-production.up.railway.app/doctors/get-all-prescriptions-sorted-by-Date?patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setDataForDoctor(res.data) ;
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
          <h2>Data</h2>
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
export default Prescriptions_2