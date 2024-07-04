import { useNavigate, useParams } from 'react-router-dom';
import './ViewPrescription.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ViewPrescription = () => {

  const { id } = useParams();

  const nav = useNavigate();

  const { type, accessP } = useSelector(state => state.user);

  const [data, setData] = useState(null);

  useEffect(() => {

    if (accessP === false && type === "doctor") {
      nav("/noPatient");
      window.location.reload();
      return
    }


    if (type === "patient") {
      axios.get(`https://vitaapp.azurewebsites.net/patients/get-prescription-details?ID=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    } else if (type === "doctor") {
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-prescription?ID=${id}&patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    }

  }, []);



  return (
    <div className='view_prescription'>
      {
        data && <div className="content_prescription">
          <div className="head">
            <div className="right">
              <h4>Patient Name: <span>{data.
                patientName
              }</span></h4>
              <h4>Doctor Name: <span>{data.doctorName
              } </span></h4>
            </div>
            <div className="left">
              <h4>Date: <span>{data.createdAt}</span></h4>
            </div>
          </div>
          <div className="info_prescription">
            <div className="medicine">
              <h3>Medicine: </h3>
              <ul>
                {
                  data.medicines.map((item, key) => <li key={key}>
                    {item.medicine}
                    <p>- {item.note}</p>
                  </li>
                  )
                }
              </ul>
            </div>
            <div className="tests">
              <h3>Tests: </h3>
              <ul>
                {
                  data.tests.map((item, key) => <li key={key}>
                    {item.test}
                    <p>- {item.note}</p>
                  </li>
                  )
                }
              </ul>
            </div>
            <div className="x_Rays">
              <h3>X-rays: </h3>
              <ul>
                {
                  data.
                    xrayes.map((item, key) => <li key={key}>
                      {item.xray}
                      <p>- {item.note}</p>
                    </li>
                    )
                }
              </ul>
            </div>
            <div className="diagnosis">
              <h3>Diagnosis: {data.diagnosis} </h3>
            </div>
            <div className="note">
              <h3>NOTE: {data.note}</h3>

            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default ViewPrescription;