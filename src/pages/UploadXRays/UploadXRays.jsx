import './UploadXRays.css'
import uploadFile from '../../assets/images/File upload xray.png';
import { CgClose } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UploadXRays = () => {


  const { type, accessP, currentProfile } = useSelector(state => state.user)


  const [ImgData, setImgData] = useState(null)
  const [Cat, setCat] = useState(null)

  const handleChnage = (e) => {
    const { files } = e.target;


    files[0] ? setImgData(files[0]) : setImgData(null)
  }


  const [ErrorMsg, setErrorMsg] = useState(null)
  const [SuccessMsg, setSuccessMsg] = useState(null)

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

      axios.post(`https://vitaapp.azurewebsites.net/XRay-Lab/add-xRay-result?xRayLaboratoryName=${currentProfile}&patientName=${accessP}&category=${Cat}`, {
        image: ImgData
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setSuccessMsg(res.data)
        console.log(res.data);
      })

      // console.log(type, currentProfile, accessP);
    }

  }





  return (
    <div className='UploadXRays'>
      <div className="container">
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
                  <option value="Category_1">Category 1</option>
                  <option value="Category_2">Category 2</option>
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
      </div>
    </div>
  )
}

export default UploadXRays;