import { useEffect } from 'react'
import FolderInfo from '../../components/FolderInfo/FolderInfo'
import { RaysHead } from '../../components/Head/Head'
import './Prescriptions.css'
import axios from 'axios'
import { FirstBtn , SecondBtn} from '../../components/Buttons/Buttons'

const Prescriptions = () => {


  useEffect(() => {
    
  }, [])
  



  return (
    <div className='prescriptions'>
      <RaysHead>
        <FirstBtn>Doctor</FirstBtn>
        <SecondBtn href='/Prescriptions_2'>List</SecondBtn>
      </RaysHead>
      <div className="prescriptions_Info d-grid">
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
        <FolderInfo href="/DocName">Doctor Name</FolderInfo>
      </div>
    </div>
  )
}

export default Prescriptions