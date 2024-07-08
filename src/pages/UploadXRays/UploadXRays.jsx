import './UploadXRays.css'
import uploadFile from '../../assets/images/File upload xray.png';
import { CgClose } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const UploadXRays = () => {


  const { type, accessP, currentProfile } = useSelector(state => state.user)

  const nav = useNavigate();

  const [ImgData, setImgData] = useState(null)
  const [Cat, setCat] = useState(null)

  const handleChnage = (e) => {
    const { files } = e.target;


    files[0] ? setImgData(files[0]) : setImgData(null)
  }


  useEffect(() => {

    if (!accessP) {
      nav('/noPatient')
    }

  }, [])



  const [ErrorMsg, setErrorMsg] = useState(null)
  const [SuccessMsg, setSuccessMsg] = useState(null)

  const [Loading, setLoading] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMsg(null)

    if (!ImgData) {
      setErrorMsg("Upload X-Ray Image")

    } else {

      if (!Cat) {
        setErrorMsg("Please Select Category");
        return
      }

      setLoading(true)

      const tmp = new FormData
      tmp.append("image", ImgData)

      axios.post(`https://vitaapp.azurewebsites.net/XRay-Lab/add-xRay-result?xRayLaboratoryName=${currentProfile}&patientName=${accessP}&category=${Cat}`, tmp, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setSuccessMsg(res.data)
        setLoading(false)
        console.log(res.data);
      }).catch(err => {
        setErrorMsg('something went wrong, try again ')
        setLoading(false)
      })

      // console.log(type, currentProfile, accessP);
    }

  }





  return (
    <div className='UploadXRays'>
      <div className="container position-relative">
        <div className="upload">
          <form onSubmit={handleSubmit} action="">
            <h3 className='text-center mb-3'>Upload X_Rays</h3>
            <div className="file">
              <img src={uploadFile} alt="" />
              <input onChange={handleChnage} type="file" />
            </div>


            <div className="uploaded mt-4 d-flex justify-content-start align-items-start flex-column">
              <h5>Uploaded</h5>
              <div className="content">
                <div className="fileName">
                  <p className='m-0'>{ImgData ? ImgData.name : '__.[ png, jpg, jpg ,... ]'}</p>
                  <div
                    onClick={() => {
                      setImgData(null)
                    }}
                    className="icon">
                    <FaTrashAlt />
                  </div>
                </div>
                <select
                  onChange={(e) => {
                    setCat(e.target.value)
                  }}
                  defaultValue="Category" className='category' id='Category' name='Category'>
                  <option value="Category" disabled>Category</option>
                  <option value="Brain">Brain</option>
                  <option value="Skull">Skull</option>
                  <option value="Eyes">Eyes</option>
                  <option value="Ears, Nose, and Throat">Ears, Nose, and Throat</option>
                  <option value="Dental">Dental</option>
                  <option value="Chest-Lungs">Chest-Lungs</option>
                  <option value="Chest-Breasts">Chest-Breasts</option>
                  <option value="Abdominal">Abdominal</option>
                  <option value="Pelvis">Pelvis</option>
                  <option value="Bones">Bones</option>
                  <option value="Joints">Joints</option>
                  <option value="Spine">Spine</option>
                  <option value="Whole Body">Whole Body</option>
                </select>
              </div>
              {
                ErrorMsg && <div className="text-danger py-2 px-3">
                  {ErrorMsg}
                </div>
              }
              {
                SuccessMsg && <div className="text-success py-2 px-3">
                  {SuccessMsg}
                </div>
              }
            </div>
            <input type="submit" value='UPLOAD FILES' />
          </form>
        </div>
        {
          Loading && <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)'
          }} className="position-absolute top-0 bottom-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <Bars />
          </div>
        }
      </div>
    </div>
  )
}

export default UploadXRays;