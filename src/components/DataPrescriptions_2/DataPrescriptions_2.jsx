import { Link } from "react-router-dom"

const DataPrescriptions_2 = (props) => {
  return (
    <Link to={props.href} className='data d-flex align-items-center'>
      <h3>Doctor</h3>
      <h3>1/5/2002</h3>
    </Link>
  )
}

export default DataPrescriptions_2