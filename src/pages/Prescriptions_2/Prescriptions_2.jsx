import './Prescriptions_2.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useEffect, useState } from 'react'
import DocName from '../DocName/DocName'
import axios from 'axios'

const Prescriptions_2 = () => {
  const [activeComponent, setActiveComponent] = useState('second'); // حالة لتحديد الزر النشط

  const handleFirstBtnClick = () => {
    setActiveComponent('first'); // تعيين الحالة إلى "first" عند الضغط على الزر الأول
  };

  const handleSecondBtnClick = () => {
    setActiveComponent('second'); // تعيين الحالة إلى "second" عند الضغط على الزر الثاني
  };


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
        <FirstBtn onClick={handleFirstBtnClick}>Doctor</FirstBtn>
        <SecondBtn onClick={handleSecondBtnClick}>List</SecondBtn>
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

        {activeComponent === 'second' ? (
          <>

          </>
        ) : (
          <DocName />
        )}
      </div>
    </div>
  )
}
export default Prescriptions_2