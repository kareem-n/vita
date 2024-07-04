import './X_RaysName.css';
import ImgXRayes_1 from '../../assets/images/x-ray1.png'
import ImgXRayes_2 from '../../assets/images/x-ray2.png'
import ImgXRayes_3 from '../../assets/images/x-ray3.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const X_RaysName = () => {



  const { type, accessP } = useSelector(state => state.user);

  const { id, name } = useParams();


  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const [img, setImg] = useState(null)

  const nav = useNavigate();


  useEffect(() => {

    if (type === "doctor" && accessP === false) {
      nav("/noPatient");
    }

    if (type === "patient") {
      axios.get(`https://vitaapp.azurewebsites.net/patients/get-XRay-picture?ID=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        },
        responseType: 'arraybuffer'
      }).then(res => {
        console.log(res.data);
        const img = convertArrayBufferToBase64(res.data);
        setImg(`data:image/jpeg;base64,${img}`)
      })
    } else if (type === "doctor") {
      axios.get(`https://vitaapp.azurewebsites.net/doctors/get-XRay-picture?ID=${id}&patientName=${accessP}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        },
        responseType: 'arraybuffer'
      }).then(res => {
        console.log(res.data);
        const img = convertArrayBufferToBase64(res.data);
        setImg(`data:image/jpeg;base64,${img}`)
      })
    }


  }, [])


  return (
    <div className='X_RaysName'>
      <div className="container">
        <div className="heading text-center pt-4">
          <h2>{name}</h2>
        </div>
        <div className="imagesName mt-4 d-flex justify-content-start align-items-center gap-3 flex-wrap">
          <div className="imageName">
            <img src={img} alt="" />
            <h6 className='mt-3 mb-0 text-center'>{name}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default X_RaysName;