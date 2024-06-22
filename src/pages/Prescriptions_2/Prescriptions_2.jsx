import './Prescriptions_2.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useEffect, useState } from 'react'
import DocName from '../DocName/DocName'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Prescriptions_2 = () => {
  const [data, setData] = useState(null);


  useEffect(() => {

    axios.get("https://blissful-gentleness-production.up.railway.app/patients/get-all-prescriptions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      setData(res.data)
    }).catch(err => {
      console.log(err);
    })

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
          data && data.map( item => 
            <div className="">
              <DataPrescriptions_2 data={item} href="/ViewPrescription" />
            </div>
          )
        }

        
      </div>
    </div>
  )
}
export default Prescriptions_2