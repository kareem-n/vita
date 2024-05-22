import FolderInfo from '../../components/FolderInfo/FolderInfo'
import { RaysHead } from '../../components/Head/Head'
import './Prescriptions.css'

const Prescriptions = () => {
  return (
    <div className='prescriptions'>
      <RaysHead/>
      <div className="prescriptions_Info d-grid">
        <FolderInfo href="/Prescriptions_2">Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
        <FolderInfo>Doctor Name</FolderInfo>
      </div>
    </div>
  )
}

export default Prescriptions