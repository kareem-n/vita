import './X_Rays.css'
import { RaysHead } from '../../components/Head/Head'
import FolderInfo from '../../components/FolderInfo/FolderInfo'

const X_Rays = () => {
  return (
    <div className='x_rays'>
      <RaysHead/>
      <div className="x_raysInfo d-grid">
        <FolderInfo href="/Prescriptions">X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
        <FolderInfo>X_Rays</FolderInfo>
      </div>
    </div>
  )
}

export default X_Rays