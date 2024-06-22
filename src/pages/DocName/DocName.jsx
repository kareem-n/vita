import './DocName.css'
import { RaysHead } from '../../components/Head/Head'
import DataPrescriptions_2 from '../../components/DataPrescriptions_2/DataPrescriptions_2'

const DocName = () => {
  return (
    <div className='prescriptions_2'>
      <RaysHead/>
      <div className="content">
        <div className="heading d-flex align-items-center">
          <h2>Doctor</h2>
          <h2>Data</h2>
        </div>
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
      </div>
    </div>
  )
}
export default DocName;