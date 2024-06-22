import { useEffect } from 'react'
import FolderInfo from '../../components/FolderInfo/FolderInfo'
import { RaysHead } from '../../components/Head/Head'
import './Prescriptions.css'
import axios from 'axios'

const Prescriptions = () => {




  return (
    <div className='prescriptions'>
      <RaysHead/>
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