import { Link } from "react-router-dom"

const DataPrescriptions_2 = ({data}) => {

  return (
    <Link to={`/ViewPrescription/${data.prescription_id}`} className='data d-flex align-items-center'>
      <h3>{data.doctorName}</h3>
      <h3>{data.created_at}</h3>
    </Link>
  )
}

export default DataPrescriptions_2