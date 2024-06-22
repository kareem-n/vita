import './Prescriptions_2.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'
import { FirstBtn, SecondBtn } from '../../components/Buttons/Buttons'
import { useState } from 'react'
import DocName from '../DocName/DocName'

const Prescriptions_2 = () => {
  const [activeComponent, setActiveComponent] = useState('second'); // حالة لتحديد الزر النشط

  const handleFirstBtnClick = () => {
    setActiveComponent('first'); // تعيين الحالة إلى "first" عند الضغط على الزر الأول
  };

  const handleSecondBtnClick = () => {
    setActiveComponent('second'); // تعيين الحالة إلى "second" عند الضغط على الزر الثاني
  };


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
        {activeComponent === 'second' ? (
          <>
            <DataPrescriptions_2 href="/ViewPrescription"/>
            <DataPrescriptions_2 href="/ViewPrescription"/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
            <DataPrescriptions_2/>
          </>
        ) : (
          <DocName/>
        )}
      </div>
    </div>
  )
}
export default Prescriptions_2