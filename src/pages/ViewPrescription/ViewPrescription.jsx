import './ViewPrescription.css'

const ViewPrescription = () => {
  return (
    <div className='view_prescription'>
      <div className="content_prescription">
        <div className="head">
          <div className="right">
            <h4>Patient Name: <span>Micheal Jackson</span></h4>
            <h4>Doctor Name: <span>Any Name </span></h4>
          </div>
          <div className="left">
            <h4>Date: <span>22/2/2022</span></h4>
          </div>
        </div>
        <div className="info_prescription">
          <div className="medicine">
            <h3>Medicine: </h3>
            <ul>
              <li>
                Medicine 1
                <p>- Note</p>
              </li>
              <li>
                Medicine 2
                <p>- Note</p>
              </li>
              <li>
                Medicine 3
                <p>- Note</p>
              </li>
            </ul>
          </div>
          <div className="tests">
          <h3>Tests: </h3>
            <ul>
              <li>
                Test 1
                <p>- Note</p>
              </li>
              <li>
                Test 2
                <p>- Note</p>
              </li>
              <li>
                Test 3
                <p>- Note</p>
              </li>
            </ul>
          </div>
          <div className="x_Rays">
          <h3>X-rays: </h3>
            <ul>
              <li>
                X-rays 1
                <p>- Note</p>
              </li>
              <li>
                X-rays 2
                <p>- Note</p>
              </li>
              <li>
                X-rays 3
                <p>- Note</p>
              </li>
            </ul>
          </div>
          <div className="diagnosis">
          <h3>Diagnosis: </h3>
            <ul>
              <li>
                Diagnosis 1
              </li>
            </ul>
          </div>
          <div className="note">
            <h3>NOTE:</h3>
            <ul>
              <li>note...</li>
            </ul>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default ViewPrescription;